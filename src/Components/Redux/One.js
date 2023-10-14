const { redux, createStore } = require('redux')

const intialState = {
    numberOfBooks: 100,
    numberOfLaptop: 50
}

//action
function BuyBook() {
    return {
        type: 'buy_book',
        info: 'my_firs_redux'
    }
}
//reducer
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'buy_book':
            return {
                a: state.numberOfBooks - 1
            }
        default:
            return state
    }

}
//store
const Store = createStore(reducer)
//console.log(Store)
console.log('intial state', Store.getState())

Store.subscribe(() => {
    console.log('update state', Store.getState())
})
Store.dispatch(BuyBook())                           // for acton call

