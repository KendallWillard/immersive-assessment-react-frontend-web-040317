import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  // Create an individual row and assign a key to each transaction that will be displayed to the user
  const allTheTransactions = props.transactions.map((transaction, ndx) => <Transaction {...transaction} key={Date.now() + ndx} />)
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {allTheTransactions} {/* Display allllllllll the transactions */}

      </tbody>
    </table>
  )
}

export default TransactionsList
