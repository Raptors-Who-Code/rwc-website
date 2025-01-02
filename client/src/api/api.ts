import API from "@/config/apiClient";
import { LoginSchema, SignupSchema } from "@/schema/auth.schema";
import { z } from "zod";

export type LoginFormFields = z.infer<typeof LoginSchema>;

export const login = async (data: LoginFormFields) =>
  API.post("/api/auth/login", data);

export type SignUpFormFields = z.infer<typeof SignupSchema>;

export const signup = async (data: SignUpFormFields) =>
  API.post("/api/auth/signup", data);

export const verifiyEmail = async (verificationCode: string) =>
  API.get(`/api/auth/email/verify/${verificationCode}`);