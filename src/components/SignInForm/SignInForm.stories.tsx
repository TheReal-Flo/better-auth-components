import type { Meta, StoryObj } from '@storybook/react';

import SignInForm from './SignInForm';

const meta = {
  component: SignInForm,
} satisfies Meta<typeof SignInForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};