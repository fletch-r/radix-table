import type { Meta, StoryObj } from '@storybook/react';

import SimpleTable from './SimpleTable';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Simple-Table/Simple Table',
  component: SimpleTable,
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HelloWorld: Story = {};
