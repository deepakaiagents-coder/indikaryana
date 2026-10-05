export type SendOtpRequest = { phone: string };
export type SendOtpResponse = { sent: boolean; expiresInSeconds: number };

export type VerifyOtpRequest = { phone: string; code: string; name?: string };
export type AuthUser = {
  id: string;
  phone: string;
  email: string | null;
  name: string | null;
  avatarUrl: string | null;
  role: string;
};
export type VerifyOtpResponse = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};
