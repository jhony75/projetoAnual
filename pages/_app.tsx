/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
