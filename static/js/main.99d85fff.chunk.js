(this["webpackJsonpcrypto-table"]=this["webpackJsonpcrypto-table"]||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),s=n(13),o=n.n(s),l=n(7),u=n(20),p=n(15),d=n(14),h=(n(51),n(52),n(53),n(4)),m=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)([]),c=Object(p.a)(r,2),i=c[0],s=c[1],m=Object(a.useMemo)((function(e){return{resizable:!0,sortable:!0,filter:"agTextColumnFilter"}}),[]),f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=1000&sortBy=market_cap&sortType=desc&convert=USD,BTC,ETH&cryptoType=all&tagType=all&audited=false&aux=ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,n=t.data.cryptoCurrencyList,s(n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{percentChange24h:e.quotes[0].percentChange24h,percentChange7d:e.quotes[0].percentChange7d,percentChange30d:e.quotes[0].percentChange30d})})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){f()}),[]);return Object(h.jsx)("div",{className:"ag-theme-alpine",style:{height:window.innerHeight,width:"100%"},children:i.length&&Object(h.jsx)(d.AgGridReact,{gridOptions:{rowSelection:"single",defaultColDef:m,rowData:i,onGridReady:function(e){return n(e.api)},suppressExcelExport:!0,suppressContextMenu:!0,enableCellTextSelection:!0,localeText:{filterOoo:"\u0424\u0456\u043b\u044c\u0442\u0440",searchOoo:"\u041f\u043e\u0448\u0443\u043a",pinColumn:"\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u0438\u0442\u0438 \u043a\u043e\u043b\u043e\u043d\u043a\u0443",pinLeft:"\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u0438\u0442\u0438 \u0437\u043b\u0456\u0432\u0430",pinRight:"\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u0438\u0442\u0438 \u0441\u043f\u0440\u0430\u0432\u0430",autosizeThiscolumn:"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u0442\u0438 \u0446\u044e \u043a\u043e\u043b\u043e\u043d\u043a\u0443",autosizeAllColumns:"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u0442\u0438 \u0432\u0441\u0456 \u043a\u043e\u043b\u043e\u043d\u043a\u0438",resetColumns:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",noPin:"\u041d\u0435 \u043f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u044f\u0442\u0438",equals:"\u0414\u043e\u0440\u0456\u0432\u043d\u044e\u0454",notEqual:"\u041d\u0435 \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454",empty:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0434\u043d\u0435",contains:"\u041c\u0456\u0441\u0442\u0438\u0442\u044c",notContains:"\u041d\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u044c",startsWith:"\u041f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437",endsWith:"\u0417\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430",lessThan:"\u0420\u0430\u043d\u0456\u0448\u0435 \u043d\u0456\u0436",greaterThan:"\u041f\u0456\u0437\u043d\u0456\u0448\u0435 \u043d\u0456\u0436",inRange:"\u0412 \u043f\u0440\u043e\u043c\u0456\u0436\u043a\u0443"}},children:[{headerName:"Name",field:"name",flex:1},{headerName:"24h",field:"percentChange24h",flex:1},{headerName:"7d",field:"percentChange7d",flex:1},{headerName:"30d",field:"percentChange30d",flex:1}].map((function(e){return Object(a.createElement)(d.AgGridColumn,Object(l.a)(Object(l.a)({},e),{},{key:e.field}))}))})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.99d85fff.chunk.js.map