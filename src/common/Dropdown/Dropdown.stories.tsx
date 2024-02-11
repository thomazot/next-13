import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';
import { Container } from '../Container';

const meta = {
  title: 'Common/Dropdown',
  component: Dropdown,
  decorators: [(story) => <Container className='flex justify-center'>{story()}</Container>],
  tags: ['autodocs'],
  args: {
    header: 'Minha Conta',
    children: <ul>
        <li>Login</li>
        <li>Cadastre-se</li>
        <li>Central de Atendimento</li>
    </ul>
  }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

