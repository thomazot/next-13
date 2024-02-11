import type { Meta, StoryObj } from '@storybook/react';

import { SignIn } from './SignIn';
import { Container } from '@/common/Container';

const meta = {
  title: 'Components/SignIn',
  component: SignIn,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

