import { auth } from '@/auth';
import { useProtectedRoute } from '@/hooks';
import { UpdateSession, useSession } from "next-auth/react"

export default async function CreateAccount() {
  // const session = await auth();
  // useProtectedRoute({session, skipCreateAccountCheck: true});
  return (
    <main className="min-h-screen">
      CreateAccount
    </main>
  )
}
