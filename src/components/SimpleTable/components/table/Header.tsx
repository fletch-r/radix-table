import React from 'react';

type HeaderProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    density: 'compact' | 'default' | 'comfortable';
}

export default function Header({ children, className, id, density }: HeaderProps) {
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

    return <th id={id} className={`border-b ${className} ${height}`}>{children}</th>;
}