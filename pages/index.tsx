import React from 'react'
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../components/Layout';
import useSWR from 'swr'
import Markdown from 'react-markdown';

const API_URL = 'https://hndup-api-cms.herokuapp.com/graphql?query={restaurants{Name%20categories{%20id%20name%20}%20picture{url}%20Description}}'
interface Props {
    userAgent?: string
    restaurants:any

}

const fetcher = async () => {
    const res = await fetch(API_URL );
    const json = await res.json();
    return json.data.restaurants
}

const HomePage: NextPage<Props> = ({ userAgent }) => {
    const { data, error } = useSWR('/repos/zeit/next.js', fetcher)
    
    return (
        <Layout>
            {
                data && data.map(restaurant => (
                    <div key={restaurant.Name}>
                        <h1>Name: {restaurant.Name}</h1>
                        <img src={restaurant.picture.url} 
                            alt=""
                            width={50}
                            height={50}
                        ></img>
                       <Markdown
                            escapeHtml={true}
                            source={restaurant.Description}
                       />
                    </div>
                ))
            }
        </Layout>
    )
}


export default HomePage