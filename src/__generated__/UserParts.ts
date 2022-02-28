/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole, Gender } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserParts
// ====================================================

export interface UserParts_profile {
  __typename: "UserProfile";
  displayName: string;
  thumbnail: string;
}

export interface UserParts {
  __typename: "User";
  id: string;
  username: string;
  role: UserRole;
  gender: Gender | null;
  address: string | null;
  detailAddress: string | null;
  profile: UserParts_profile;
}
