const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cakes: cakeReducer,
        icecream: icecreamReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store