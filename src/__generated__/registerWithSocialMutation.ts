/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RegisterWithSocialInput, ErrorMessage, UserRole, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: registerWithSocialMutation
// ====================================================

export interface registerWithSocialMutation_registerWithSocial_user_profile {
  __typename: "UserProfile";
  displayName: string;
  thumbnail: string;
}

export interface registerWithSocialMutation_registerWithSocial_user {
  __typename: "User";
  id: string;
  username: string;
  role: UserRole;
  gender: Gender | null;
  address: string | null;
  detailAddress: string | null;
  profile: registerWithSocialMutation_registerWithSocial_user_profile;
}

export interface registerWithSocialMutation_registerWithSocial {
  __typename: "RegisterWithSocialOutput";
  ok: boolean;
  error: ErrorMessage | null;
  accessToken: string | null;
  user: registerWithSocialMutation_registerWithSocial_user | null;
}

export interface registerWithSocialMutation {
  registerWithSocial: registerWithSocialMutation_registerWithSocial;
}

export interface registerWithSocialMutationVariables {
  input: RegisterWithSocialInput;
}
