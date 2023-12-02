import type { Meta, StoryObj } from '@storybook/react';

import { FieldText } from './FieldText';
import { Container } from '../../common/Container';
import { FieldError } from 'react-hook-form';
import { BiSearch } from 'react-icons/bi';

const meta = {
  title: 'Forms/FieldText',
  component: FieldText,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof FieldText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {args: { label: 'Username' }};

export const Disabled: Story = {args: { label: 'Username', disabled: true }};

export const Error: Story = {args: { label: 'Username', error: { message: 'Error message' } as FieldError}}

export const Icon: Story = {args: { label: 'Username', icon: <BiSearch className='fill-current' />}}

export const IconLeft: Story = {args: { label: 'Username', icon: <BiSearch className='fill-current' />, iconPosition: 'left'}}

export const Loading: Story = {args: { label: 'Username', loading: true}}

