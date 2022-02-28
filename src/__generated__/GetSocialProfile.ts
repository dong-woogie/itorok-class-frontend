/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ErrorMessage } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSocialProfile
// ====================================================

export interface GetSocialProfile_getSocialProfile_profile {
  __typename: "SocialProfile";
  displayName: string | null;
  username: string | null;
  shortBio: string | null;
}

export interface GetSocialProfile_getSocialProfile {
  __typename: "GetSocialProfileOutput";
  ok: boolean;
  error: ErrorMessage | null;
  profile: GetSocialProfile_getSocialProfile_profile | null;
}

export interface GetSocialProfile {
  getSocialProfile: GetSocialProfile_getSocialProfile;
}
