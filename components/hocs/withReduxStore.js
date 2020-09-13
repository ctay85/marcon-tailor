
// Dependencies
import { Component } from 'react'

// Store
import configureStore from 'store/configureStore'

//
const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

//
function getOrCreateStore (initialState) {
  if (isServer) return configureStore(initialState)
  if (!window[__NEXT_REDUX_STORE__]) window[__NEXT_REDUX_STORE__] = configureStore(initialState)
  return window[__NEXT_REDUX_STORE__]
}

// Component
const withReduxStore = App => {
  return class AppWithRedux extends Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()

      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}

// Export
export default withReduxStore
