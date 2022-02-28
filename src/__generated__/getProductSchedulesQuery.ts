/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetProductSchedulesInput, ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL query operation: getProductSchedulesQuery
// ====================================================

export interface getProductSchedulesQuery_getProductSchedules_scheduleTimes_learningTime {
  __typename: "TimeType";
  hour: number;
  minute: number;
}

export interface getProductSchedulesQuery_getProductSchedules_scheduleTimes {
  __typename: "ScheduleTime";
  date: string;
  minPerson: number;
  maxPerson: number;
  applyPerson: number;
  learningTime: getProductSchedulesQuery_getProductSchedules_scheduleTimes_learningTime;
}

export interface getProductSchedulesQuery_getProductSchedules {
  __typename: "GetProductSchedulesOutput";
  ok: boolean;
  error: ErrorMessage | null;
  scheduleTimes: getProductSchedulesQuery_getProductSchedules_scheduleTimes[] | null;
}

export interface getProductSchedulesQuery {
  getProductSchedules: getProductSchedulesQuery_getProductSchedules;
}

export interface getProductSchedulesQueryVariables {
  input: GetProductSchedulesInput;
}
