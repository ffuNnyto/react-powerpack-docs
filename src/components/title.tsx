import { ReactNode } from 'react'
export const Title = ({ children, className }: { children: ReactNode, className: string }) => <h1 className={`text-xl ${className}`}>{children}</h1>