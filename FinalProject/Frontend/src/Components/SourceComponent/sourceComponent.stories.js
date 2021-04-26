import React from 'react';
import {storiesOf} from '@storybook/react';
import SourceComponent from './index';


const defaultProps = {
    data: {}, 
    color: "",
    size: ""
};

// const populatedProps = {
//     searchCountry: "Colombia",
//     setSearchCountry: () => {}
// };


storiesOf('SourceComponent', module)
.add('default', () => <SourceComponent {...defaultProps} />);
// .add("populatedProps", () => <SearchBar {...populatedProps} />);