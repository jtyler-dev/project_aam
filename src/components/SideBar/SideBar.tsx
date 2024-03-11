'use client'
import React from 'react';
import { usePathname, useRouter } from 'next/navigation'
import * as ROUTES from '@/constants/Routes'
import { SideBarMenuItem } from './SideBarMenuItem';
import { HomeIcon } from '@heroicons/react/24/outline'

export interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  const path = usePathname();
  console.log(path)

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-primary lg:pb-4">
      <div className="flex h-16 shrink-0 items-center justify-center">
      </div>
      <nav className="mt-8">
        <ul role="list" className="flex flex-col items-center space-y-1">
          <li>
            <SideBarMenuItem
              href={ROUTES.DASHBOARD}
              label="Home"
              icon={<HomeIcon className="h-6 w-6 shrink-0"/>}
              isActive={path === ROUTES.DASHBOARD}
            />
          </li>
          <li>
            <SideBarMenuItem
              href={'/test'}
              label="Test"
              icon={<HomeIcon className="h-6 w-6 shrink-0"/>}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
