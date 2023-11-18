import type { Meta, StoryObj } from '@storybook/react';
import { ButtonVariant, Icons } from '../constants/enums';
import { IconButton } from '../atoms/IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: "text",
      description: "css classes",
      type: "string"
    },
    icon: {
      control: "text",
      description: `A list of values from Icons enum`,
      type: "string"
    }
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: ".button",
    icon: Icons.PIN ,
    children: "button",
    loading: false,
    variant: ButtonVariant.PRIMARY
  },
}

export const Loading: Story = {
  args: {
    className: ".icon--purple",
    icon: Icons.PIN ,
    children: "button",
    loading: true,
    variant: ButtonVariant.PRIMARY
  },
}
