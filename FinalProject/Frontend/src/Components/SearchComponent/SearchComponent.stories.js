import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchBar from './index';

const defaultProps = {
    searchCountry: "", 
    placeholderText:"",
    setSearchCountry: () => {}
};

const wideSearchBar = {
    searchCountry: "Colombia",
    placeholderText:"Search Country here",
    variant: "wide",
    setSearchCountry: () => {}
};

const roundedBar = {
    
    placeholderText:"Country",
    variant: "rounded",
    setSearchCountry: () => {}
};

const dynamicBar = {
    
    placeholderText:"Country",
    variant: "dynamic",
    setSearchCountry: () => {}
};



storiesOf('SearchBar', module)
.add('default', () => <SearchBar {...defaultProps} />)
.add("wideSearchBar", () => <SearchBar {...wideSearchBar} />)
.add("roundedBar", () => <SearchBar {...roundedBar} />)
.add("dynamicBar", () => <SearchBar {...dynamicBar} />);