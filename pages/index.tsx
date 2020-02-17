import React from 'react'
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../components/Layout';
import useSWR from 'swr'
import axios from 'axios'
import Markdown from 'react-markdown';
import { Restaurant } from '../graphql/types';
import Link from 'next/link';

const API_URL = 'https://hndup-api-cms.herokuapp.com/graphql'
interface Props{
    userAgent?: string

}

const fetcher = async () => {
    const res = await axios.post(API_URL,{
        query: `      
        {
            restaurants {
              Name
              categories{
                id
                name
              }
              picture {
                url
              }
              Description
            }
         }
    `,
    },{ headers: {
        'Content-Type': 'application/json'
    }})

    return res.data.data.restaurants
}

const HomePage: NextPage<Props> = ({ userAgent }) => {
    const { data, error } = useSWR('/repos/zeit/next.js', fetcher)
    return (
        <Layout>
            {
                data && data.map((restaurant:Restaurant) => {
                    return (
                        <div key={restaurant.id}>
                            <h1>Name: {restaurant.Name}</h1>
                            <img src={restaurant.picture.url} 
                                alt=""
                                className="cover-image"
                            ></img>
                           <Markdown
                                escapeHtml={true}
                                source={restaurant.Description}
                                
                           />
                           <ul>
                               {restaurant.categories && restaurant.categories.map(category => (
                                   <li key={category.id} style={{
                                       backgroundColor: category.name === 'Coffee' ? "#a52a2a": "purple"
                                   }} className="pills">
                                        {category.name}
                                   </li>
                               ))}
                           </ul>
                        </div>
                    )
                })
            }
            <Link href="/about"><span>Go to next Page</span></Link>
            <style jsx>{`
                ul {
                    display: flex;
                    flex-direction: row;
                }
                li {
                    padding: 9px 10px;
                    color: white;
                    height: 30px;
                    width: fit-content;
                    border-radius: 100px;
                } 
                .pills {
                    margin-left: 20px;
                } 
                .cover-image {
                    width: 100px;
                    height: 100px;
                    border-radius: 100px;
                }  
                img {
                    width: 100%
                }
                span {
                    float: right;
                    color: purple;
                    font-size: 16px;
                    font-weight: 400;
                    cursor: pointer;
                    transition: cubic-bezier(0.075, 0.82, 0.165, 1) color;
                    margin-bottom: 30px;
                }
                span:hover {
                    color: brown;
                }
            `}</style>
        </Layout>
    )
}


export default HomePage