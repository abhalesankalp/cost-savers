import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import data from '../DataFile/Data.json';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridJS = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const min = 10;
    const max = 70;
    console.log(data);
    const [rowData, setRowData] = useState(data);

    function onGridReady(params) {
      
    }

    return (
        <div className="ag-theme-alpine" style={ { height: 350, width: 1020 } }>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn  field="ProductName" sortable="true" editable="true" filter={true}></AgGridColumn>
                <AgGridColumn field="Category" sortable="true" editable="true" filter={true}></AgGridColumn>
                <AgGridColumn field="SubCategory" sortable="true" editable="true" filter={true}></AgGridColumn>
                <AgGridColumn field="OptimalInventory" sortable="true" editable="true" filter={true}></AgGridColumn>
                <AgGridColumn field="CostDifference" sortable="true" editable="true" filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default GridJS;