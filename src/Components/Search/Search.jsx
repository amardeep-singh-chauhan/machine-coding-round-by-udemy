import React, { useEffect, useState } from 'react'

function Search() {
    const baseData = ['apple', 'kiwi', 'pears'];
    const [data, setData] = useState(baseData)
    const [value, setValue] = useState('')

    useEffect(() => {
        if(value != ""){
            let filteredData = data.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase())
            })
            setData(filteredData)
        } else {
            setData(baseData)
        }
    }, [value])

    return (
        <>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' />
            </div>
            {data.length > 0 ?data.map((item,index) => <p key={index}>{item}</p>) : <p>No Data Found</p>}
            <hr />
        </>
    )
}

export default Search