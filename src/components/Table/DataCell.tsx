import React, { TdHTMLAttributes } from "react";

type DataCellProps = TdHTMLAttributes<HTMLTableCellElement> &  {
    children: React.ReactNode;
    className?: string;
    density: 'compact' | 'default' | 'comfortable';
}

export default function DataCell({ children, className, density, ...props }: DataCellProps) {
    const [height, setHeight] = React.useState('py-2');

    React.useEffect(() => {
        switch (density) {
            case 'compact':
                setHeight('py-0');
                break;
            case 'comfortable':
                setHeight('py-4');
                break;
            default:
                setHeight('py-2');
                break;
        }
    }, [density]);

    return (
        <td className={`border-b ${className} ${height}`} {...props}>
            {children}
        </td>
    );
}