import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '../components/Layout'

const About: NextPage = ({}) => {
    return (
        <Layout>
            hey
            <Link href="/">Go to HomePage</Link>
        </Layout>
    )
}

export default About