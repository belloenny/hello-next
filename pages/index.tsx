import React from 'react'
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../components/Layout';


interface Props {
    userAgent?: string
    restaurants:any

}

const HomePage: NextPage<Props> = ({ userAgent, restaurants }) => {

    return (
        <Layout>
            {
                restaurants && restaurants.map(restaurant => (
                    <div>
                        <h1>Name: {restaurant.Name}</h1>
                        <img src={`https://hndup-api-cms.herokuapp.com${restaurant.picture.url}`} 
                            alt=""
                            width={50}
                            height={50}
                        ></img>
                    </div>
                ))
            }
        </Layout>
    )
}

HomePage.getInitialProps = async () => {
    const res = await fetch(`https://hndup-api-cms.herokuapp.com/graphql?query={restaurants{Name%20categories{%20id%20name%20}%20picture{url}}}`);
    const data = await res.json();
    return {
        restaurants: data.data.restaurants
    }
};

export default HomePage