import { auth } from '@/auth';
import { useProtectedRoute } from '@/hooks';
import { DASHBOARD } from '@/constants/Routes'
import {SideBarMenuItem, SideBar} from '@/components/SideBar';
import { BeakerIcon } from '@heroicons/react/24/solid'

export default async function Dashboard() {
  const session = await auth();
  // useProtectedRoute({session, callbackUrl: DASHBOARD});

  return (
    <>
      <SideBar>
      </SideBar>
      <main className="lg:pl-20">
        test
      </main>
    </>
  )
}
