import React, { TableHTMLAttributes } from 'react';

type FooterProps = TableHTMLAttributes<HTMLTableSectionElement> &  {
    children: React.ReactNode;
    className?: string;
};

export default function Footer({ children, className }: FooterProps) {
  return (
    <tbody className={`${className}`}>
        {children}
    </tbody>
  );
}