import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { Container } from '@/common/Container';

const meta = {
  title: 'Components/Header',
  component: Header,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

