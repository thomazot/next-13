import type { Meta, StoryObj } from '@storybook/react';

import { CardProduct } from '.';
import { Container } from '../../common/Container';
import CardProductMock from './CardProduct.mock'

const meta = {
  title: 'Components/CardProduct',
  component: CardProduct,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: CardProductMock()
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

