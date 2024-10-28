// import React from 'react'

import { Link } from "react-router-dom"

const Test = () => {
    let foodArray = [
        {name: "apple", price: 10},
        {name: "banana", price: 20},
        {name: "orange", price: 30},
        {name: "mango", price: 40},
    ]

    let {name, price} = foodArray

  return (
    <>
        <h1> List Of Foods Available</h1>
        {
            foodArray.map((food, index) => (
                <div key= {index}>
                <p>{index+1}. {food.name} {food.price}</p>
                <Link to={`/road/sabo`}>View Details</Link>
            </div>
            ))
        }
    </>
  )
}

export default Test