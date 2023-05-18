import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

function Select({ onChange }: { onChange: (value: string) => void; }) {
    return (
        <RadixSelect.Root defaultValue="5" onValueChange={onChange}>
            <RadixSelect.Trigger className="SelectTrigger" aria-label="Food">
                <RadixSelect.Value placeholder="Select number of rows" />

                <RadixSelect.Icon className="SelectIcon">
                    <ChevronDownIcon />
                </RadixSelect.Icon>
            </RadixSelect.Trigger>

            <RadixSelect.Portal className="z-20">
                <RadixSelect.Content className="SelectContent">
                    <RadixSelect.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon />
                    </RadixSelect.ScrollUpButton>

                    <RadixSelect.Viewport className="SelectViewport">
                        <RadixSelect.Group>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="30">30</SelectItem>
                            <SelectItem value="40">40</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                        </RadixSelect.Group>
                    </RadixSelect.Viewport>

                    <RadixSelect.ScrollDownButton className="SelectScrollButton">
                        <ChevronDownIcon />
                    </RadixSelect.ScrollDownButton>
                </RadixSelect.Content>
            </RadixSelect.Portal>
        </RadixSelect.Root>
    );
}

type SelectItemProps = {
    children: React.ReactElement | string;
    value: string;
    className?: string;
    disabled?: boolean;
};

const SelectItem = React.forwardRef(({ children, className, ...props }: SelectItemProps, forwardedRef: React.Ref<HTMLDivElement>) => {
  return (
    <RadixSelect.Item className={`SelectItem ${className}`} {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
});

export default Select;