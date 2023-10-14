const { redux, createStore } = require('redux')

const intialState = {
    numberOfCar: 500,
    numberOfBus: 100
}
// action
const BuyCar = () => {
    return {
        type: 'buy_car',
        info: 'my_first_redux'
    }
}
// reducer
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'buy_car':
            return {
                c: state.numberOfCar - 1
            }
        default:
            return state
    }

}
//store data
const Store = createStore(reducer)
//intial state 
console.log('intial state', Store.getState())
// update State 
Store.subscribe(() => {
    console.log('update state', Store.getState())

})
// action call
Store.dispatch(BuyCar())