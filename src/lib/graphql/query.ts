import { gql } from '@apollo/client'

export const GET_SOCIAL_PROFILE = gql`
  query GetSocialProfile {
    getSocialProfile {
      ok
      error
      profile {
        displayName
        username
        shortBio
      }
    }
  }
`

export const GET_USER_ON_LOAD = gql`
  query getUserOnLoad {
    getUserOnLoad {
      id
      username
      profile {
        displayName
        thumbnail
      }
    }
  }
`

export const GET_POPULAR_CATEOGRIES = gql`
  query getPopularCategories {
    getPopularCategories {
      id
      name
      slug
      coverImg
    }
  }
`
