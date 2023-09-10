import type { Meta, StoryObj } from '@storybook/react';

import { Widget } from './Widget';
import { Container } from '@/common/Container';

const meta = {
  title: 'Components/Widget',
  component: Widget,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

