import type { AppProps } from 'next/app'
import '../Components/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
