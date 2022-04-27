import '../styles/global.css'
import { AppProps } from 'next/app'
import store from '../storage/landing'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
