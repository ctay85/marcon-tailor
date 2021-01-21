
// Dependencies
import { AppProps } from 'next/app'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion';

// Services
import { withReduxStore } from 'components/hocs'

// Components
import { Head, Header, Footer } from 'components/common'

// Styles
import 'styles/main.scss'

// Redux store interface
// TODO: Is this the right way? Can I just extend AppProps?
interface ReduxProps {
  reduxStore : Store
}

// Component
const App = ({ Component, pageProps, router, reduxStore } : AppProps & ReduxProps) => {
  const initialOpacity = router.route === '/' ? 1 : 0

  return (
    <Provider store={reduxStore}>
      <Head />
      <Header />

      <AnimatePresence exitBeforeEnter>
        <motion.div key={ router.route } initial={{ opacity : initialOpacity }} animate={{ opacity : 1 }} exit={{ opacity : 0 }} transition={{ duration : 0.5 }}>
          <Component { ...pageProps } />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </Provider>
  )
}

// Export
export default withReduxStore(App)
