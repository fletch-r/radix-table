import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';
import ThinRowDensityIcon from '../../../../icons/ThinRowDensityIcon';
import MediumRowDensityIcon from '../../../../icons/MediumRowDensityIcon';
import ThickRowDensityIcon from '../../../../icons/ThickRowDensityIcon';
import Tooltip from '../Tooltip';

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
                                <ThinRowDensityIcon className="RadioGroupIndicator" />
                            </RadioGroup.Item>
                    </div>
                </Tooltip>
                <Tooltip tip="Standard">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioGroup.Item className="RadioGroupItem" value="default" id="r2">
                            <MediumRowDensityIcon className="RadioGroupIndicator" />
                        </RadioGroup.Item>
                    </div>
                </Tooltip>
                <Tooltip tip="Comfortable">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r3">
                            <ThickRowDensityIcon className="RadioGroupIndicator" />
                        </RadioGroup.Item>
                    </div>
                </Tooltip>
            </RadioGroup.Root>
        </form>
    );
}