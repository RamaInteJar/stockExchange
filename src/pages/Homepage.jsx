import React from 'react';
import stockData from '../components/Stocks';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1 className='active'>Active Stocks</h1>
      <table className="stockTable">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Last Price</th>
            <th scope="col">Change</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Open</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>
                <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
                </td>
              <td>{stock.symbol}</td>
              <td>{stock.lastPrice}</td>
              <td>{stock.change}</td>
              <td>{stock.high}</td>
              <td>{stock.low}</td>
              <td>{stock.open}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Homepage;
