import React from 'react';
import Link from 'next/link'

export interface SideBarMenuItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({
  href,
  label,
  icon,
  isActive = false,
  onClick,
}) => {
  return (
    <Link 
      className={`${isActive ? 'bg-secondary' : 'bg-primary'} hover:bg-secondary text-white group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold`}
      href={href}
      onClick={onClick}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
};
