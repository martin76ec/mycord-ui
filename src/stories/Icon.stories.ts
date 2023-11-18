import type { Meta, StoryObj } from '@storybook/react';
import Icon from "../atoms/Icon";
import { Icons } from '../constants/enums';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Icon',
  component: Icon,
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
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "icon--purple",
    icon: Icons.PIN 
  },
}

export const Secondary: Story = {
  args: {
    className: "icon--white",
    icon: Icons.PIN
  },
}
