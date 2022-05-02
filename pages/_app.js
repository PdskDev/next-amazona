import '../styles/globals.css';
import createCache from '@emotion/cache';
import { cacheProvider } from '@emotion/react';
import { StoreProvider } from '../utils/Store';

const clientSideEmotionCache = createCache({ key: 'css' });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <cacheProvider value={emotionCache}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </cacheProvider>
  );
}

export default MyApp;
