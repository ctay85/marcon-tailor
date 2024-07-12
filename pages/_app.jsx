// Dependencies
import { Provider } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

// Services
import { withReduxStore } from "@/components/hocs";

// Components
import { Head, Header, Footer } from "@/components/common";

// Styles
import "@/styles/main.scss";

// Component
const App = ({ Component, pageProps, router, reduxStore }) => {
  const initialOpacity = router.route === "/" ? 1 : 0;

  return (
    <Provider store={reduxStore}>
      <Head />
      <Header />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: initialOpacity }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </Provider>
  );
};

// Export
export default withReduxStore(App);
