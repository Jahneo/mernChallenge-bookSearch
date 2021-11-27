// import from apollo client
import gql  from 'graphql-tag';

// define paramters to return serach values
export const QUERY_FIND = gql`
{
    find {
        _id
        username
        email
        bookCount
        savedBooks{
            # _id
            bookId
            authors
            image
            link
            title
            description
        }
    }
}
`;
