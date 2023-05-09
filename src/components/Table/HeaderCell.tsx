import React, { ThHTMLAttributes } from 'react';

type HeaderCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
    children: React.ReactNode;
    className?: string;
    density: 'compact' | 'default' | 'comfortable';
};

export default function HeaderCell({ children, className, density, ...props }: HeaderCellProps) {
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
        <th className={`border-b ${className} ${height}`} {...props}>
            {children}
        </th>
    );
}