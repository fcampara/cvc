import React from 'react'
import { useForm } from 'react-hook-form'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from './index'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const { control } = useForm()
  return <Checkbox {...args} control={control} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'checkbox',
  label: 'Example label',
}
