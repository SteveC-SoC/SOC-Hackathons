import React from 'react';
import {storiesOf} from '@storybook/react';
import UKRestrictionsDisplay from './index';

let defData = {
  country:"England:",
  covidHeadline:"In England, you must have a permitted reason to travel abroad and complete the declaration form",
  quarantineRestirctions:"Do Not Travel Outside of Your Local Area "
}

export default {
  title: "UKRestDisplay",
  component: Text,
  argTypes: { onClick: { action: "clicked" }, addColor: {control: 'color'}},
};

//👇 We create a “template” of how args map to rendering
const Template = args => <UKRestrictionsDisplay {...args} />;
// args is just the control version of passing down props, so that we can change them in storybook

export const smallDisplay = Template.bind({})
smallDisplay.args = {
  /*👇 The args you need here will depend on your component */
  data: defData,
  color: "mustardBox",
  size: "smallBox"
};


export const LargeDisplay = Template.bind({})
LargeDisplay.args = {
  /*👇 The args you need here will depend on your component */
  data: defData,
  size: "largeBox",
  color: "blueBox",
  heading: "heading1"
};

export const BillBoardDisplay = Template.bind({})
BillBoardDisplay.args = {
  /*👇 The args you need here will depend on your component */
  data: defData,
  size: "billBoard",
 heading: "heading"
};