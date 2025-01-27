import type { Meta, StoryObj } from '@storybook/react';

import OtpInput from './OtpInput';

const meta = {
  component: OtpInput,
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};