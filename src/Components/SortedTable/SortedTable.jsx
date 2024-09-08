import React, { useEffect, useState } from 'react'
const URL = "https://reqres.in/api/users"

function SortedTable() {
    const [tableData, setTableData]= useState([])

    useEffect(()=>{
        fetch(URL).then((res)=>res.json()).then((data)=>{
            let sortedData = data.data.sort((a ,b) => a.first_name.localeCompare(b.first_name))
            setTableData(sortedData)
        }).catch((err)=>console.log(err))
    },[])

  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((item)=><tr>
                <td>{`${item.first_name} ${item.last_name}`}</td>
                <td>{item.email}</td>
            </tr>)}
        </tbody>
    </table>
  )
}

export default SortedTable