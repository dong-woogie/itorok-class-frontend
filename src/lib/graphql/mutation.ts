import { gql } from '@apollo/client'

export const LOGIN_WITH_SOCIAL = gql`
  mutation loginWithSocialMutation($input: LoginWithSocialInput!) {
    loginWithSocial(input: $input) {
      ok
      error
    }
  }
`
