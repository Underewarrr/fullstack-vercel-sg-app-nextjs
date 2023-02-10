import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" />
      <Component {...pageProps} />
    </>
  )
}
