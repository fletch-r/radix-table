import React from "react";

type DataProps = {
    children: React.ReactNode;
    className?: string;
    density: 'compact' | 'default' | 'comfortable';
}

export default function Data({ children, className, density }: DataProps) {
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

    return <td className={`border-b ${className} ${height}`}>{children}</td>;
}