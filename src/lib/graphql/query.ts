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
