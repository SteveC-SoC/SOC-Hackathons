import React from "react";

import Button from "./index.js";

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

//👇 We create a “template” of how args map to rendering
const Template = args => <Button {...args} />;

export const LargeButton = Template.bind({})
LargeButton.args = {
  /*👇 The args you need here will depend on your component */
  text: "Large",
  size: "large"

};
export const SmallButton = Template.bind({})
SmallButton.args = {
  /*👇 The args you need here will depend on your component */
  text: "S",
  size: "small",
};

export const MediumButton = Template.bind({})
MediumButton.args = {
  /*👇 The args you need here will depend on your component */
  text: "Medium"
};

//I added npm i storybook-css-modules-preset