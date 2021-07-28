import { gql } from '@apollo/client'

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    username
    role
    gender
    profile {
      displayName
      thumbnail
    }
  }
`
