import React, { Component } from 'react';
import data from '../../DataFile/Data.json';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';
import { NumberFormatter } from './NumberFormatter';
import { NumericCellEditor } from './NumericEditor';
import { RangeFilter } from './RangeFilter';

class FilterGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modules: AllModules,
            columnDefs: [
                {headerName: 'ProductName', field: 'Product Name', chartDataType: 'Series'},
                {headerName: 'BuyPrice', field: 'Buy Price', chartDataType: 'Series'},
                {headerName: 'SellPrice', field: 'Sell Price',  chartDataType: 'Series'},
                {
                    headerName: 'Margin',
                    field: 'Margin',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                },
                {
                    headerName: 'Inventory',
                    field: 'Inventory',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter',
                    valueGetter:doubledValue,
                },
                {
                    headerName: 'Average Sale',
                    field: 'Average Sale',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                },
                {
                    headerName: 'COGS',
                    field: 'COGS',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                },
                {
                    headerName: 'Revenue',
                    field: 'Revenue',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                },
                {
                    headerName: 'Profit',
                    field: 'Profit',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                },
                {
                    headerName: 'Average Days to Sell Inventory',
                    field: 'Average Days to Sell Inventory',
                    editable: true,
                    cellRenderer: 'numberFormatter',
                    cellEditor: 'numericCellEditor',
                    chartDataType: 'Series',
                    filter: 'rangeFilter'
                }
            ],
            rowData: data,
            chartThemeOverrides: {
                common:{
                    enabled: true,
                    text: 'Top 5 Medal Winners',
                },
                pie: {
                  title: {
                    enabled: true,
                    text: 'Precious Metals Production',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'rgb(100, 100, 100)',
                  },
                  subtitle: {
                    enabled: true,
                    text: 'by country',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'rgb(100, 100, 100)',
                  },
                  padding: {
                    top: 25,
                    right: 20,
                    bottom: 55,
                    left: 20,
                  },
                  legend: { enabled: false },
                  series: {
                    label: { enabled: true },
                    callout: { length: 20 },
                  },
                },
              },
            frameworkComponents: {
                'numberFormatter': NumberFormatter,
                'numericCellEditor': NumericCellEditor,
                'rangeFilter': RangeFilter
            }
        }
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/15psn9')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    onFirstDataRendered = (params) => {
        var createRangeChartParams = {
          cellRange: {
            rowStartIndex: 0,
            rowEndIndex: 50,
            columns: ['Inventory', 'Margin'],
          },
          chartType: 'line',
        };
        params.api.createRangeChart(createRangeChartParams);
    };
    
    simpleCall = (params) => {
        var createRangeChartParams = {
          cellRange: {
            rowStartIndex: 0,
            rowEndIndex: 50,
            columns: ['Inventory', 'Margin'],
          },
          chartType: 'line',
        };
        params.api.createRangeChart(createRangeChartParams);
    };

    getChartToolbarItems = () => { 
    return ['chartDownload', 'chartData', 'chartSettings'];
    };

    
  getContextMenuItems = () => {
    var result = [
      'copy',
      'separator',
      'chartRange',
    ];
    return result;
  };

    render() {
        return (
            <div className="ag-theme-balham GridLayout">

                <AgGridReact
                    paginationAutoPageSize={true}
                    enableSorting={true}
                    enableFilter={true}
                    pagination={true}
                    columnDefs={this.state.columnDefs}
                    frameworkComponents={this.state.frameworkComponents}
                    rowData={this.state.rowData}
                    chartThemeOverrides={this.state.chartThemeOverrides}
                    getChartToolbarItems={this.getChartToolbarItems}
                    onGridReady={this.onGridReady}
                    enableCharts={true}
                    enableRangeSelection={true}
                    getContextMenuItems={this.getContextMenuItems}
                    onFirstDataRendered={this.onFirstDataRendered.bind(this)}>
                </AgGridReact>
            </div>
        );
    }
}

var doubledValue = function (params) {
    return params.data.Margin * 2;
  };
export default FilterGrid;