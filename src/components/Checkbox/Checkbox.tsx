import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import './styles.css';

function Checkbox() {
  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadixCheckbox.Root className="CheckboxRoot" style={{ boxShadow: 'none' }} id="c1">
          <RadixCheckbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
    </form>
  );
}

export default Checkbox;