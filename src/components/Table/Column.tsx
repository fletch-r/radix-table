import React, { ColHTMLAttributes } from 'react';

type ColumnProps = ColHTMLAttributes<HTMLTableColElement> &  {
    children: React.ReactNode;
    className?: string;
};

export default function ColumnGroup({children, className, ...props}: ColumnProps) {
  return (
    <col className={`${className}`} {...props}>
        {children}
    </col>
  )
}