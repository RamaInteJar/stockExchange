import React from 'react'
import stockData from '../components/Stocks'
import { useParams } from 'react-router-dom'



const Stocklisting = (props) => {
  const params = useParams()
  const symbol = params.symbol
  const name = params.name
console.log(props.stockData);

const stock = props.stockData.find((obj)=> {
  return obj.symbol == symbol
})

  return (
    <div>
        <h1>{symbol}</h1>
        <h2>{stock.name}</h2>
        <h2>{stock.lastPrice}</h2>
        <h2>{stock.change}</h2>
        <h2>{stock.high}</h2>
        <h2>{stock.low}</h2>
        <h2>{stock.open}</h2>

    </div>
  )
}

export default Stocklisting