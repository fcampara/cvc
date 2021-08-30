import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { name, datatype } from 'faker'
import Select from './Select'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} onChange={console.log} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Example label',
  options: Array(20)
    .fill(undefined)
    .map(() => ({ label: name.firstName(), value: datatype.number() })),
}
