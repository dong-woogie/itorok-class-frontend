import { gql } from '@apollo/client'
import { USER_FRAGMENT } from './fragments'

export const LOGIN_WITH_SOCIAL = gql`
  mutation loginWithSocialMutation($input: LoginWithSocialInput!) {
    loginWithSocial(input: $input) {
      ok
      error
      accessToken
      user {
        ...UserParts
      }
    }
  }
  ${USER_FRAGMENT}
`

export const REGISTER_WITH_SOCIAL = gql`
  mutation registerWithSocialMutation($input: RegisterWithSocialInput!) {
    registerWithSocial(input: $input) {
      ok
      error
      accessToken
      user {
        ...UserParts
      }
    }
  }
  ${USER_FRAGMENT}
`

export const LOGOUT_MUTATION = gql`
  mutation logoutMutation {
    logout
  }
`

export const UPDATE_USER = gql`
  mutation updateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      ok
      error
      user {
        ...UserParts
      }
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_PRODUCT = gql`
  mutation createProductMutation($input: CreateProductInput!) {
    createProduct(input: $input) {
      ok
      error
    }
  }
`
