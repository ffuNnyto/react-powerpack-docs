import useLocalStorage from '@/hooks/useLocalStorage';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export function MainNav({ className, ...props }: MainNavProps) {

  const [value, setValue] = useLocalStorage<string>('current_tab', '0');
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <Link
        onClick={() => setValue('0')}
        to='/home'
        className={cn('text-sm font-medium', {
          'transition-colors hover:text-primary': value === '0',
          'text-muted-foreground': value !== '0',
        })}
      >
        Home
      </Link>
      <Link
        onClick={() => setValue('1')}
        to='/components/def'
        className={cn('text-sm font-medium', {
          'transition-colors hover:text-primary': value === '1',
          'text-muted-foreground': value !== '1',
        })}
      >
        Components
      </Link>
      <Link
        onClick={() => setValue('2')}
        to='/hooks/def'
        className={cn('text-sm font-medium', {
          'transition-colors hover:text-primary': value === '2',
          'text-muted-foreground': value !== '2',
        })}
      >
        Hooks
      </Link>
    </nav>
  );
}