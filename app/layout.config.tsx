import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, LayoutDashboard, Send, UsersRound } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        20rank docs
      </>
    ),
  },
  links: [
    {
      icon: <BookIcon />,
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      icon: <LayoutDashboard />,
      text: 'Dashboard',
      url: 'https://20rank.ru/dashboard',
      active: 'nested-url',
    },
    {
      icon: <Send />,
      text: 'Telegram Community',
      url: 'https://t.me/twentyrank',
      active: 'nested-url',
    },
    {
      icon: <UsersRound />,
      text: 'Discord Channel',
      url: 'https://20rank.ru/dashboard',
      active: 'nested-url',
    },
  ],
};
