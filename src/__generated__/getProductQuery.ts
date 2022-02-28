/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetProductInput, ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL query operation: getProductQuery
// ====================================================

export interface getProductQuery_getProduct_product_category {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface getProductQuery_getProduct_product_learningTime {
  __typename: "TimeType";
  hour: number;
  minute: number;
}

export interface getProductQuery_getProduct_product_schedules {
  __typename: "Schedule";
  id: string;
  date: string;
  activeTimes: string[];
}

export interface getProductQuery_getProduct_product {
  __typename: "Product";
  id: string;
  title: string;
  photos: string[];
  address: string;
  price: number;
  category: getProductQuery_getProduct_product_category;
  learningTime: getProductQuery_getProduct_product_learningTime;
  minPerson: number;
  maxPerson: number;
  isParking: boolean;
  schedules: getProductQuery_getProduct_product_schedules[];
  introduce: string;
  curriculum: string;
}

export interface getProductQuery_getProduct {
  __typename: "GetProductOutput";
  ok: boolean;
  error: ErrorMessage | null;
  product: getProductQuery_getProduct_product;
}

export interface getProductQuery {
  getProduct: getProductQuery_getProduct;
}

export interface getProductQueryVariables {
  input: GetProductInput;
}
