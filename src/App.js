import React, { useMemo, useState, useEffect } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const onGridReady = (params) => setGridApi(params.api)

  const defaultColDef = useMemo((col) => {
    return {
      resizable: true,
      sortable: true,
      filter: 'agTextColumnFilter',
    }
  }, []);

  const getInfo = async () => {
    const { data: { cryptoCurrencyList: row } } = await (await fetch('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=1000&sortBy=market_cap&sortType=desc&convert=USD,BTC,ETH&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d')).json()
    setRowData(row.map(r => ({
      ...r,
      "percentChange24h": r.quotes[0].percentChange24h,
      "percentChange7d": r.quotes[0].percentChange7d,
      "percentChange30d": r.quotes[0].percentChange30d,
    }
    )))
  }

  useEffect(() => {
    getInfo()
  }, [])

  const columns = [
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: '24h', field: 'percentChange24h', flex: 1 },
    { headerName: '7d', field: 'percentChange7d', flex: 1 },
    { headerName: '30d', field: 'percentChange30d', flex: 1 },
  ]

  return (
    <div className={"ag-theme-alpine"} style={{
      height: window.innerHeight,
      width: '100%'
    }}>
      {rowData.length && <AgGridReact
        gridOptions={{
          rowSelection: 'single',
          defaultColDef,
          rowData,
          onGridReady,
          suppressExcelExport: true,
          suppressContextMenu: true,
          localeText: {
            filterOoo: 'Фільтр',
            searchOoo: 'Пошук',
            pinColumn: 'Прикріпити колонку',
            pinLeft: 'Прикріпити зліва',
            pinRight: 'Прикріпити справа',
            autosizeThiscolumn: 'Порівняти цю колонку',
            autosizeAllColumns: 'Порівняти всі колонки',
            resetColumns: 'Скинути налаштування',
            noPin: 'Не прикріпляти',
            equals: 'Дорівнює',
            notEqual: 'Не дорівнює',
            empty: 'Виберіть одне',
            contains: 'Містить',
            notContains: 'Не містить',
            startsWith: 'Починається з',
            endsWith: 'Закінчується на',
            lessThan: 'Раніше ніж',
            greaterThan: 'Пізніше ніж',
            inRange: 'В проміжку',
          }
        }}
      >
        {columns.map(column => <AgGridColumn {...column} key={column.field} />)}
      </AgGridReact>
      }
    </div >
  )
}

export default App
