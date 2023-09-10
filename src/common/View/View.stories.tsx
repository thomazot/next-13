import type { Meta, StoryObj } from '@storybook/react';

import { View } from '.';
import { Container } from '../Container';

const meta = {
  title: 'Common/View',
  component: View,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {
    children: <> View </>
  }
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

