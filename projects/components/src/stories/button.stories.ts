import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {

    iconPosition: {
      options: ['prefix', 'suffix']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
  },
};

export const Accent: Story = {
  args: {
    color: 'accent',
    label: 'Button',
  },
};

export const Warn: Story = {
  args: {
    color: 'warn',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
    label: 'Button',
  },
};

export const IconPrefix: Story = {
  argTypes: {
  },
  args: {
    color: 'primary',
    label: 'Sort',
    icon: 'sort',
    iconPosition: 'prefix'
  },
};

export const IconSuffix: Story = {
  argTypes: {
  },
  args: {
    color: 'primary',
    label: 'Sort',
    icon: 'sort',
    iconPosition: 'suffix'
  },
};
