import type { Meta, StoryObj } from '@storybook/react';

import { CardPost } from '.';
import { Container } from '../../common/Container';
import CardPostMock from './CardPost.mock'

const meta = {
  title: 'Components/CardPost',
  component: CardPost,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: CardPostMock()
} satisfies Meta<typeof CardPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

