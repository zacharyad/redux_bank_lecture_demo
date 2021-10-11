import {createStore} from 'redux'


// grabbing dom nodes from the html
const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch(depositSomeMoney(5))
deposit25.onclick = () => store.dispatch(depositSomeMoney(25))
withdraw5.onclick = () => store.dispatch(takeSomeMoney(5))
withdraw25.onclick = () => store.dispatch(takeSomeMoney(25))

//Action Types
const DEPOSIT = "DEPOSIT"
const WITHDRAW = "WITHDRAW"

//Action Creatores
const depositSomeMoney = (amount) => {
  // return {
  //     type: DEPOSIT, amount: amount
  //   }

  return {
    type: DEPOSIT,
    amount
  }
}

const takeSomeMoney = (amount) => {
  return {
    type: WITHDRAW,
    amount
  }
}

let initialState = {
  balance: 0,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case DEPOSIT:
        return { balance: state.balance + action.amount }
      case WITHDRAW:
        return { balance: state.balance - action.amount }
      default:
        return state;
    }
}


const store = createStore(reducer)



// redux gives up this method - this method will "fire off"/"run" when the state changes. prev --> newState 
store.subscribe(() => {
    console.log("The store state changed. Here is the new state:", store.getState());
    console.dir("*********", store)
    balance.innerText = store.getState().balance
  })







