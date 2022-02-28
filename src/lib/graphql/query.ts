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

export const GET_PRODUCT = gql`
  query getProductQuery($input: GetProductInput!) {
    getProduct(input: $input) {
      ok
      error
      product {
        id
        title
        photos
        address
        price
        category {
          name
          slug
        }
        learningTime {
          hour
          minute
        }
        minPerson
        maxPerson
        isParking
        schedules {
          id
          date
          activeTimes
        }
        introduce
        curriculum
      }
    }
  }
`

export const GET_PRODUCT_SCHEDULES = gql`
  query getProductSchedulesQuery($input: GetProductSchedulesInput!) {
    getProductSchedules(input: $input) {
      ok
      error
      scheduleTimes {
        date
        minPerson
        maxPerson
        applyPerson
        learningTime {
          hour
          minute
        }
      }
    }
  }
`

export const GET_PRODUCT_COUNT = gql`
  query getProductCountquery {
    getProductCount {
      ok
      error
      productCount
    }
  }
`

export const GET_PRODUCTS = gql`
  query getProductsQuery {
    getProducts {
      ok
      error
      products {
        id
        thumbnail
        title
        price
        category {
          name
          slug
        }
        mentor {
          username
          profile {
            thumbnail
            displayName
          }
        }
      }
    }
  }
`
