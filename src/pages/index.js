import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}