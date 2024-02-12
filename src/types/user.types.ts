export type User = {
  username: string;
  email: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
};

type AuthWithoutSessionToken = Omit<User["authentication"], "sessionToken">;

export type UserWithoutSessionToken = {
  username: string;
  email: string;
  authentication: AuthWithoutSessionToken;
};
