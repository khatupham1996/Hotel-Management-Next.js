"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  // google is the name of provider that we use to sign in
  await signIn("google", { redirectTo: "/account" });
}
export async function signOutAction() {
  // google is the name of provider that we use to sign in
  await signOut({ redirectTo: "/" });
}
