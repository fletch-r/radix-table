import React from 'react';
import * as RadixToggleGroup from '@radix-ui/react-toggle-group';
import './styles.css';
import ThinRowDensityIcon from '../../../../icons/ThinRowDensityIcon';
import MediumRowDensityIcon from '../../../../icons/MediumRowDensityIcon';
import ThickRowDensityIcon from '../../../../icons/ThickRowDensityIcon';

const ToggleGroup = () => (
  <RadixToggleGroup.Root
    className="ToggleGroup"
    type="single"
    defaultValue="center"
    aria-label="Text alignment"
  >
    <RadixToggleGroup.Item className="ToggleGroupItem" value="left" aria-label="Left aligned">
      <ThinRowDensityIcon />
    </RadixToggleGroup.Item>
    <RadixToggleGroup.Item className="ToggleGroupItem" value="center" aria-label="Center aligned">
      <MediumRowDensityIcon />
    </RadixToggleGroup.Item>
    <RadixToggleGroup.Item className="ToggleGroupItem" value="right" aria-label="Right aligned">
      <ThickRowDensityIcon />
    </RadixToggleGroup.Item>
  </RadixToggleGroup.Root>
);

export default ToggleGroup;