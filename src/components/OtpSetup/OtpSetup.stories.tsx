import type { Meta, StoryObj } from '@storybook/react';

import OtpSetup from './OtpSetup';

const meta = {
  component: OtpSetup,
} satisfies Meta<typeof OtpSetup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    uri: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Better-Auth-Components",
    showBackUpCodes: true,
    backUpCodes: "abc"
  }
};