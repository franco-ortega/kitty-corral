import { useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [corralSize, setCorralSize] = useState(0);

  console.log('LAYOUT: ', corralSize);

  return (
    <Layout>
      <Component
        {...pageProps}
        corralSize={corralSize}
        setCorralSize={setCorralSize}
      />
    </Layout>
  );
}

export default MyApp;
