import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Container } from '../../common/Container';

const meta = {
  title: 'Forms/Button',
  component: Button,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {
    children: 'Text button'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { };
export const Disabled: Story = { args: { "disabled": true } }
export const Full: Story = { args: { full: true } }