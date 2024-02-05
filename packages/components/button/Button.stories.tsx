import { Meta, StoryObj } from '@storybook/react'
import DefaultButton, { ButtonProps } from './Button'

export default {
  component: DefaultButton,
  title: 'Components/Actions/Button/DefaultButton',
} as Meta<typeof DefaultButton>

const Template = (args: ButtonProps) => {
  const theme = args.buttonType?.split('-')?.[1] ?? 'dark'

  return (
    <div
      className="flex w-full p-10"
      style={{ backgroundColor: theme === 'light' ? '#FAFAFA' : '#272E3A' }}
    >
      <DefaultButton {...args}>Default Button</DefaultButton>
    </div>
  )
}

export const Primary = Template.bind({}) as StoryObj<typeof DefaultButton>
Primary.args = {
  buttonType: 'primary-light',
  buttonSize: 'medium',
}
Primary.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/YkGJybrruZCC3lrJNxP1BR/Klone_PC_Guide?type=design&node-id=3532-17013&mode=dev',
  },
}
