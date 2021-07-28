import { gql } from '@apollo/client'
import { USER_FRAGMENT } from './fragments'

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
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
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
