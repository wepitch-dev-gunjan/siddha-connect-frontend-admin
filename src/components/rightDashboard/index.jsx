import React from 'react'
import './style.scss'

const RightDashboard = () => {
  return (
    <div className='RightDashboard-container'>
      <div className="transaction">
        <div className="transaction-head">
            <p>Transactions</p>
        </div>
        <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
              
              </tbody>
            </table>
          </div>
      </div>
      <div className="transaction">
        <div className="transaction-head">
            <p>Notification</p>
        </div>
        <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
              
              </tbody>
            </table>
          </div>
      </div>
      <div className="transaction">
        <div className="transaction-head">
            <p>FAQ</p>
        </div>
        <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td>MTD</td>
                  <td>20000</td>
                </tr>
              
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default RightDashboard
