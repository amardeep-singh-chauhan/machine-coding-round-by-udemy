import React, { useEffect, useState } from 'react'

const items = [
    {
        id: 1,
        imageUrl:
            'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Item 1',
        description: 'Description of item 1',
    },
    {
        id: 2,
        imageUrl:
            'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Item 2',
        description: 'Description of item 2',
    },
    {
        id: 3,
        imageUrl:
            'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Item 3',
        description: 'Description of item 3',
    },
];

function Crousel() {
    // My solution----------------------------------------------------------------------

    // const [current, setCurrent] = useState({})
    // const [cIndex, setCIndex] = useState(0)

    // useEffect(()=>{
    //     setCurrent(items[cIndex])
    // },[cIndex])

    // const prev = () => {
    //     if(cIndex > 0){
    //         setCIndex(cIndex - 1)
    //     }
    // }
    // const next = () => {
    //     if(cIndex == 2){
    //         setCIndex(0)
    //     }else{
    //         setCIndex(cIndex + 1)
    //     }
    // }

    // Optimised Solution------------------------------------------------------------

    const [cIndex, setCIndex] = useState(0)

    const prev = () => setCIndex((prev) => prev == 0 ? items.length - 1 : prev - 1)
    const next = () => setCIndex((prev) => (prev + 1) % items.length)

    const current = items[cIndex]

    return (
        <div style={{width:'250px'}}>
            <img height={250} width={250} src={current.imageUrl}/>
            <h4>{current.title}</h4>
            <p>{current.description}</p>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Crousel