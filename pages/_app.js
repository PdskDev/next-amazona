import '../styles/globals.css';
import createCache from '@emotion/cache';
import { cacheProvider } from '@emotion/react';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <cacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </cacheProvider>
  );
}

export default MyApp;
