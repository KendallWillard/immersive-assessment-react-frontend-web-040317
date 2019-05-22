import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const store = []

class AccountContainer extends Component {

  state = {
    currentTransactions: transactions
  }

  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(response => response.json())
    .then(currentTransactions => {
      store.push(currentTransactions); // Use store for search so original state is not mutated
      this.setState({currentTransactions})
    })
    .catch(error => console.error(error))
  }

  handleChange = (event) => {
    let newState = store[0].filter(transaction => transaction.description.includes(event.target.value))
    this.setState({
      currentTransactions: newState
    })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleChange}/>
        <TransactionsList transactions={this.state.currentTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
