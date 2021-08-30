import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { lorem } from 'faker'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', 'primary'],
      },
    },
    icon: {
      description: 'Ícones utilizado fontawesome',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: lorem.word(10),
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
  icon: 'fas fa-times',
}
