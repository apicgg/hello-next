// import './globals.css';
// import type { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

export default function App({ Component, pageProps }) {
  console.log('Hello from _app.tsx');

  return <Component {...pageProps} />;
}
