import type { Meta, StoryObj } from '@storybook/react';

import { Showcase } from '.';
import { Container } from '../../common/Container';
import ShowcaseMock from './Showcase.mock'

const meta = {
  title: 'Components/Showcase',
  component: Showcase,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: ShowcaseMock
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

