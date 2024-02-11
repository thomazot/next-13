import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';
import { Container } from '../Container';

const meta = {
  title: 'Common/Card',
  component: Card,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {
    children: <> Card </>
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

