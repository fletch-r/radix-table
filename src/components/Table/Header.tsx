import React, { TableHTMLAttributes } from 'react';

type HeadProps = TableHTMLAttributes<HTMLTableSectionElement> &  {
    children: React.ReactNode;
    className?: string;
}

export default function Head({ children, className }: HeadProps) {
  return (
    <thead className={`sticky top-0 bg-white z-20 ${className}`}>
        {children}
    </thead>
  );
}