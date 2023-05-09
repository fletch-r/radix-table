import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import './styles.css';

type TooltipProps = {
    children: React.ReactNode;
    tip: string | React.ReactNode;
};

export default function Tooltip({ children, tip }: TooltipProps) {
    return (
        <RadixTooltip.Provider>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>
                    {children}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
                        {tip}
                        <RadixTooltip.Arrow className="TooltipArrow" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
}