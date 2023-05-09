import React, { ColgroupHTMLAttributes } from 'react';

type ColumnGroupProps = ColgroupHTMLAttributes<HTMLTableColElement> &  {
    children: React.ReactNode;
    className?: string;
};

export default function ColumnGroup({children, className, ...props}: ColumnGroupProps) {
  return (
    <colgroup className={`${className}`} {...props}>
        {children}
    </colgroup>
  )
}