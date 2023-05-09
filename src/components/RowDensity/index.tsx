import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';
import WideDensityIcon from '../../icons/WideDensityIcon';
import DefaultDensityIcon from '../../icons/DefaultDensityIcon';
import NarrowDensityIcon from '../../icons/NarrowDensityIcon';
import Tooltip from '../Tooltip/Tooltip';

type RowDensityProps = {
    onChange: (value: 'compact' | 'default' | 'comfortable') => void;
};

export default function RowDensity({ onChange }: RowDensityProps) {
    return (
        <form>
            <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density" onValueChange={onChange}>
                <Tooltip tip="Compact">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                            <RadioGroup.Item className="RadioGroupItem" value="compact" id="r1">
                                <NarrowDensityIcon className="RadioGroupIndicator" />
                            </RadioGroup.Item>
                    </div>
                </Tooltip>
                <Tooltip tip="Standard">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioGroup.Item className="RadioGroupItem" value="default" id="r2">
                            <DefaultDensityIcon className="RadioGroupIndicator" />
                        </RadioGroup.Item>
                    </div>
                </Tooltip>
                <Tooltip tip="Comfortable">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r3">
                            <WideDensityIcon className="RadioGroupIndicator" />
                        </RadioGroup.Item>
                    </div>
                </Tooltip>
            </RadioGroup.Root>
        </form>
    );
}