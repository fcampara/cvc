import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stars from './Stars'

export default {
  title: 'Components/Stars',
  component: Stars,
} as ComponentMeta<typeof Stars>

const Template: ComponentStory<typeof Stars> = (args) => {
  return <Stars {...args} />
}

export const Default = Template.bind({})
Default.args = {
  maxAwards: 3,
}
