import React from 'react'
import { NextPage } from 'next';
import Link from'next/link';
import { Layout } from '../components/Layout';
interface Props {
    userAgent?: string
}

const HomePage: NextPage<Props> = ({ userAgent }) => {
    return (
        <Layout>
            
            <h1>Hello From Nextjs </h1>
            <Link href="/about">Go to About Page</Link>
        </Layout>
    )
}

HomePage.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  };

export default HomePage