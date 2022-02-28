/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL query operation: getProductCountquery
// ====================================================

export interface getProductCountquery_getProductCount {
  __typename: "GetProductCountOutput";
  ok: boolean;
  error: ErrorMessage | null;
  productCount: number | null;
}

export interface getProductCountquery {
  getProductCount: getProductCountquery_getProductCount;
}
