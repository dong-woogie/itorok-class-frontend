import { gql } from '@apollo/client'

export const LOGIN_WITH_SOCIAL = gql`
  mutation loginWithSocialMutation($input: LoginWithSocialInput!) {
    loginWithSocial(input: $input) {
      ok
      error
    }
  }
`

export const REGISTER_WITH_SOCIAL = gql`
  mutation registerWithSocialMutation($input: RegisterWithSocialInput!) {
    registerWithSocial(input: $input) {
      ok
      error
    }
  }
`
