import { useState } from 'react';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [corralCount, setCorralCount] = useState(0);

  // console.log('LAYOUT: ', corralCount);

  return (
    <Layout>
      <Component
        {...pageProps}
        corralCount={corralCount}
        setCorralCount={setCorralCount}
      />
    </Layout>
  );
}

export default MyApp;
