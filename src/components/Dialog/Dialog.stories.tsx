import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dialog from './Dialog'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => {
  return <Dialog {...args} />
}

export const Default = Template.bind({})
Default.args = {
  open: false,
}
