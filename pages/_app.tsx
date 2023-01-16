import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Sans_Pro } from '@next/font/google'
import ThemeContextWrapper from '../theme/ThemeWrapper';

const inter = Source_Sans_Pro({ subsets: ['latin'], weight: "400" })


export default function App({ Component, pageProps }: AppProps) {
  return     <>
  <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>
    <ThemeContextWrapper>  <Component {...pageProps} /></ThemeContextWrapper>

</>
}
