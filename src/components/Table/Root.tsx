import React, { TableHTMLAttributes } from 'react'

type RootProps = TableHTMLAttributes<HTMLTableElement> &  {
    children: React.ReactNode;
    className?: string;
    key?: string | number;
};

export default function Root({ children, className, id, key = 0, ...props }: RootProps) {
  return (
    <table
        id={`resizeMe-${key} ${id}`}
        className={`text-sm border-separate w-max border-spacing-0 ${className}`}
        {...props}
    >
        {children}
    </table>
  )
}