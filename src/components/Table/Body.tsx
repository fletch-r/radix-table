import React, { TableHTMLAttributes } from 'react';

type BodyProps = TableHTMLAttributes<HTMLTableSectionElement> &  {
    children: React.ReactNode;
    className?: string;
};

export default function Body({ children, className }: BodyProps) {
  return (
    <tbody className={`${className}`}>
        {children}
    </tbody>
  );
}