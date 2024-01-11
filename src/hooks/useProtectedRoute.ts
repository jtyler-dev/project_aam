import { redirect } from 'next/navigation';
import { Session } from "@auth/core/types";
import { CREATE_ACCOUNT, SIGNIN } from '@/constants/Routes';

interface useProtectedRouteArgs {
  session: Session | null
  callbackUrl?: string
  skipCreateAccountCheck?: boolean
}

export const useProtectedRoute = ({ session, callbackUrl, skipCreateAccountCheck = false }:useProtectedRouteArgs) => {
  // setup a redirect if there is no user
  // TODO: investigate middleware for this if possible

  // we dont have a session, so redirect to login
  if (!session) {
    redirect(`${SIGNIN}${callbackUrl ? `?callbackUrl=${callbackUrl}` : ''}`);
  }

  // we have a session, but no user, so redirect to create account to finish account creation
  if(!skipCreateAccountCheck && session && !session.user?.name) {
    redirect(`${CREATE_ACCOUNT}${callbackUrl ? `?callbackUrl=${callbackUrl}` : ''}`);
  }
}