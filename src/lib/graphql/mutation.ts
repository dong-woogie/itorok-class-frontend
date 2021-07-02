import { gql } from '@apollo/client'

export const LOGIN_WITH_SOCIAL = gql`
  mutation loginWithSocialMutation($input: LoginWithSocialInput!) {
    loginWithSocial(input: $input) {
      ok
      error
      data {
        socialId
        thumbnail
        displayName
        provider
      }
    }
  }
`

// export const REGISTER_WITH_SOCIAL = gql`

// `
