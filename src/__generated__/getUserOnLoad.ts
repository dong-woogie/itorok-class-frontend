/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole, Gender } from "./globalTypes";

// ====================================================
// GraphQL query operation: getUserOnLoad
// ====================================================

export interface getUserOnLoad_getUserOnLoad_profile {
  __typename: "UserProfile";
  displayName: string;
  thumbnail: string;
}

export interface getUserOnLoad_getUserOnLoad {
  __typename: "User";
  id: string;
  username: string;
  role: UserRole;
  gender: Gender | null;
  address: string | null;
  detailAddress: string | null;
  profile: getUserOnLoad_getUserOnLoad_profile;
}

export interface getUserOnLoad {
  getUserOnLoad: getUserOnLoad_getUserOnLoad;
}
