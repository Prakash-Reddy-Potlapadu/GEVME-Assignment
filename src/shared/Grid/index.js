import React from 'react';
import Table from 'rc-table';
import './Grid.scss'


  
//  const data = [
//    { name: 'Jack', age: 28, address: 'some where', key: '1' },
//    { name: 'Rose', age: 36, address: 'some where', key: '2' },
//  ]

const Grid=(props)=>{
const {columns,data}=props;

return <>
<Table columns={columns} data={data} />
</>

}



export default Grid;
