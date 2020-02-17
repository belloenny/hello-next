import React from 'react'
import Head from 'next/head'

interface Props {
    children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {
    return (
        <React.Fragment>
            <Head>
                <title>Next js Website Man</title>
            </Head>
            <main> {children}</main>
            <style jsx>{`
                main {
                    max-width: 960px;
                    margin-left: auto;
                    margin-right: auto;
                    overflow: hidden;
                }
               
            `}</style>
        </React.Fragment>
    )
}


