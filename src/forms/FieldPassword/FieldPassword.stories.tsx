import type { Meta, StoryObj } from '@storybook/react';

import { FieldPassword } from './FieldPassword';
import { Container } from '../../common/Container';

const meta = {
  title: 'Forms/FieldPassword',
  component: FieldPassword,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof FieldPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};