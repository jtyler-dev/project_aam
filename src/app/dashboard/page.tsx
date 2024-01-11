import { auth } from '@/auth';
import { useProtectedRoute } from '@/hooks';
import { DASHBOARD } from '@/constants/Routes'

export default async function Dashboard() {
  const session = await auth();
  useProtectedRoute({session, callbackUrl: DASHBOARD});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
    </main>
  )
}
