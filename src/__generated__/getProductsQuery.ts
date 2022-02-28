/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL query operation: getProductsQuery
// ====================================================

export interface getProductsQuery_getProducts_products_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface getProductsQuery_getProducts_products_mentor_profile {
  __typename: "UserProfile";
  thumbnail: string;
  displayName: string;
}

export interface getProductsQuery_getProducts_products_mentor {
  __typename: "User";
  username: string;
  profile: getProductsQuery_getProducts_products_mentor_profile;
}

export interface getProductsQuery_getProducts_products {
  __typename: "Product";
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  category: getProductsQuery_getProducts_products_category;
  mentor: getProductsQuery_getProducts_products_mentor;
}

export interface getProductsQuery_getProducts {
  __typename: "GetProductsOutput";
  ok: boolean;
  error: ErrorMessage | null;
  products: getProductsQuery_getProducts_products[];
}

export interface getProductsQuery {
  getProducts: getProductsQuery_getProducts;
}
