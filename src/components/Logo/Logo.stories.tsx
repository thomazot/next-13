import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';
import { Container } from '@/common/Container';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

