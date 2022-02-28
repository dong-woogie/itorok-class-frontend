/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput, ErrorMessage, UserRole, Gender } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateUserMutation
// ====================================================

export interface updateUserMutation_updateUser_user_profile {
  __typename: "UserProfile";
  displayName: string;
  thumbnail: string;
}

export interface updateUserMutation_updateUser_user {
  __typename: "User";
  id: string;
  username: string;
  role: UserRole;
  gender: Gender | null;
  address: string | null;
  detailAddress: string | null;
  profile: updateUserMutation_updateUser_user_profile;
}

export interface updateUserMutation_updateUser {
  __typename: "UpdateUserOutput";
  ok: boolean;
  error: ErrorMessage | null;
  user: updateUserMutation_updateUser_user | null;
}

export interface updateUserMutation {
  updateUser: updateUserMutation_updateUser;
}

export interface updateUserMutationVariables {
  input: UpdateUserInput;
}
