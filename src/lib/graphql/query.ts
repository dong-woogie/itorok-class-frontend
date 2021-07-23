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
