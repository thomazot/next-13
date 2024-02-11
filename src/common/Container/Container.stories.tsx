import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './';

const meta = {
  title: 'Common/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <> Container </>
    }
};

