/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginWithSocialInput, ErrorMessage, UserRole, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: loginWithSocialMutation
// ====================================================

export interface loginWithSocialMutation_loginWithSocial_user_profile {
  __typename: "UserProfile";
  displayName: string;
  thumbnail: string;
}

export interface loginWithSocialMutation_loginWithSocial_user {
  __typename: "User";
  id: string;
  username: string;
  role: UserRole;
  gender: Gender | null;
  address: string | null;
  detailAddress: string | null;
  profile: loginWithSocialMutation_loginWithSocial_user_profile;
}

export interface loginWithSocialMutation_loginWithSocial {
  __typename: "LoginWithSocialOutput";
  ok: boolean;
  error: ErrorMessage | null;
  accessToken: string | null;
  user: loginWithSocialMutation_loginWithSocial_user | null;
}

export interface loginWithSocialMutation {
  loginWithSocial: loginWithSocialMutation_loginWithSocial;
}

export interface loginWithSocialMutationVariables {
  input: LoginWithSocialInput;
}
