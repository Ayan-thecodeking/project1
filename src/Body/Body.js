import React from 'react'
import Card from '../Card/Card'
import './index.css'

const Body = () => {
    const arr=[1,2,3,4,5,6]
    return (
        <>
            <div className='cards_container'>
                {
arr.map((val,ind)=>{
    return <Card />
})
                }
          
           
            </div>
        </>
    )
}

export default Body