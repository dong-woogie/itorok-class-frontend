/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ErrorMessage {
  DO_LOGOUT = "DO_LOGOUT",
  EXPIRED_ACCESS_TOKEN = "EXPIRED_ACCESS_TOKEN",
  EXPIRED_REFRESH_TOKEN = "EXPIRED_REFRESH_TOKEN",
  FORBIDDEN_RESOURCE = "FORBIDDEN_RESOURCE",
  NOT_FOUND_ACCESS_TOKEN = "NOT_FOUND_ACCESS_TOKEN",
  NOT_FOUND_REGISTER_TOKEN = "NOT_FOUND_REGISTER_TOKEN",
  NOT_REGISTER_CLIENT = "NOT_REGISTER_CLIENT",
  NOT_REGISTER_MENTOR = "NOT_REGISTER_MENTOR",
  PLEASE_TRY_AGAIN = "PLEASE_TRY_AGAIN",
}

export enum Gender {
  female = "female",
  male = "male",
}

export enum SocialProvider {
  facebook = "facebook",
  google = "google",
  kakao = "kakao",
}

export enum UserRole {
  admin = "admin",
  client = "client",
  manager = "manager",
  mentor = "mentor",
}

export interface CreateProductInput {
  title: string;
  address: string;
  detailAddress: string;
  thumbnail: string;
  photos: string[];
  learningTime: TypeTypeInput;
  daysOfActive: DaysOfActiveInput;
  introduce: string;
  curriculum: string;
  minPerson: number;
  maxPerson: number;
  price: number;
  category: string;
}

export interface DaysOfActiveInput {
  sun: string[];
  mon: string[];
  tue: string[];
  wed: string[];
  thu: string[];
  fri: string[];
  sat: string[];
}

export interface GetProductInput {
  productId: string;
}

export interface GetProductSchedulesInput {
  scheduleId: string;
}

export interface LoginWithSocialInput {
  code: string;
  provider: SocialProvider;
  role: UserRole;
}

export interface RegisterWithSocialInput {
  displayName: string;
  username: string;
  role: UserRole;
  address?: string | null;
  detailAddress?: string | null;
  gender?: Gender | null;
  phoneNumber?: string | null;
  shortBio?: string | null;
}

export interface TypeTypeInput {
  hour: number;
  minute: number;
}

export interface UpdateUserInput {
  address?: string | null;
  detailAddress?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
