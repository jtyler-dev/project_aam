import { auth } from '@/auth';
import { useProtectedRoute } from '@/hooks';
import { UpdateSession, useSession } from "next-auth/react"

export default async function Profile({ params }: { params: { userName: string } }) {
  // const session = await auth();
  // useProtectedRoute({session, skipCreateAccountCheck: true});
  return (
    <main className="min-h-screen">
      Profile: {params.userName}
    </main>
  )
}
