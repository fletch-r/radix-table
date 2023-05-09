import React, { TdHTMLAttributes } from 'react';

type DataCellProps = TdHTMLAttributes<HTMLTableRowElement> &  {
    children: React.ReactNode;
    className?: string;
}

function Row({ children, className, ...props }: DataCellProps) {
  return (
    <tr className={`${className}`} {...props}>
        {children}
    </tr>
  )
}

export default Row