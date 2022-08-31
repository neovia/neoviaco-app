// import '../styles/globals.css'
import '../styles/assets/css/theme.bundle.css'
import '../styles/assets/css/libs.bundle.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { wrapper, store } from "../modules/app/redux/store";
import Layout from '../components/Layout/layout'

function NeoviacoApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default wrapper.withRedux(NeoviacoApp);

