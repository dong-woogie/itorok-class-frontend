/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateProductInput, ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createProductMutation
// ====================================================

export interface createProductMutation_createProduct {
  __typename: "CreateProductOutput";
  ok: boolean;
  error: ErrorMessage | null;
}

export interface createProductMutation {
  createProduct: createProductMutation_createProduct;
}

export interface createProductMutationVariables {
  input: CreateProductInput;
}
