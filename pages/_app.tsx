import '../global/index.css'
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      
        <React.Fragment>
          <Head>
            <title>Next js Man</title>
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
        
        
     
    );
  }
}

export default MyApp;
