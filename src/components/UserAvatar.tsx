import React from 'react';

interface UserAvatarProps {
  gender?: 'L' | 'P';
  className?: string;
}

export default function UserAvatar({ gender = 'L', className = 'w-full h-full' }: UserAvatarProps) {
  if (gender === 'P') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" referrerPolicy="no-referrer">
        <rect width="100" height="100" rx="50" fill="url(#female-avatar-grad)" />
        <circle cx="50" cy="38" r="15" fill="#475569" />
        {/* Female Hair outline */}
        <path d="M50 18C41 18 34 25 34 34C34 39 36 43 39 46C37 49 35.5 52.5 35 56.5C39 55 42 51 44 47C46 48 48 48.5 50 48.5C52 48.5 54 48 56 47C58 51 61 55 65 56.5C64.5 52.5 63 49 61 46C64 43 66 39 66 34C66 25 59 18 50 18Z" fill="#1E293B" />
        {/* Female Shoulder outline */}
        <path d="M26 80C26 70 34 62 44 62H56C66 62 74 70 74 80V90H26V80Z" fill="#64748B" />
        <defs>
          <linearGradient id="female-avatar-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCE7F3" />
            <stop offset="1" stopColor="#FBCFE8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" referrerPolicy="no-referrer">
      <rect width="100" height="100" rx="50" fill="url(#male-avatar-grad)" />
      <circle cx="50" cy="38" r="16" fill="#334155" />
      <path d="M26 80C26 70 34 62 44 62H56C66 62 74 70 74 80V90H26V80Z" fill="#475569" />
      <defs>
        <linearGradient id="male-avatar-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" />
          <stop offset="1" stopColor="#BAE6FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
