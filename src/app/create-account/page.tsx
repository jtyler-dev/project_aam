import { auth } from '@/auth';
import { useProtectedRoute } from '@/hooks';

export default async function CreateAccount() {
  const session = await auth();
  useProtectedRoute({session, skipCreateAccountCheck: true});
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      CreateAccount
    </main>
  )
}
