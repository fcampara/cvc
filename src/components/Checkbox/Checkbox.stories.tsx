import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'checkbox',
  label: 'Example label',
}
