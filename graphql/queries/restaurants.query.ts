import gql from 'graphql-tag';
export default gql`
    query Restaurants {
        restaurants {
            Name
            categories {
                id
                name
            }
            picture {
                url
            }
        }
    }
`
