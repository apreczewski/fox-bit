import { AppProvider } from "@/hooks"
import { GlobalStyle } from '@/styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
