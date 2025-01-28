import type { Meta, StoryObj } from '@storybook/react';

import { OAuthProviderButton } from './OAuthProviderButton';

const meta = {
  component: OAuthProviderButton,
} satisfies Meta<typeof OAuthProviderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};