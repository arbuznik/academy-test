import React             from 'react'
import { AppProps }      from 'next/app'
import { ThemeProvider } from '@ui/theme'

type TProps = unknown;

const App = ({ Component, pageProps }: AppProps<TProps>) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
