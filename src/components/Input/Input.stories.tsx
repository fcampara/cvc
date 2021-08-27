import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './index'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'Input',
  label: 'Example label',
}
