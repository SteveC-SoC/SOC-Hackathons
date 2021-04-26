import React from 'react';
import {storiesOf} from '@storybook/react';
import TravelRestrictionsDisplay from './index';


const defaultProps = {
    data: {}, 
    color: "",
    size: "",
    imgSize: ""
};

// const populatedProps = {
//     searchCountry: "Colombia",
//     setSearchCountry: () => {}
// };


storiesOf('TravelRestrictionsDisplay', module)
.add('default', () => <TravelRestrictionsDisplay {...defaultProps} />);
// .add("populatedProps", () => <SearchBar {...populatedProps} />);


