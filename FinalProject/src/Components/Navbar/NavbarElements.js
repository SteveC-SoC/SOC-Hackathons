import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: linear-gradient(15deg, #b3fbdf, #1C9AB0);
${'' /* background: linear-gradient(15deg, #fb7ba2, #fce043); */}

height: 80px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index: 1000;
min-width: 100%;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
position: fixed;

`

export const NavLink = styled(Link)`

display: flex;
align-items: center;
justify-items: center;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
color: #FFF;
font-size: 1.5rem;
padding: 4px ;
height: 100%;
font-size: 1.7rem;
cursor: pointer; 
margin: 50px;

&.active{
    color: #FFF;
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
}

&:hover{
    color: #fff;
    border-radius: 25px;
    background: #aae0ef;
    opacity: 0.6;
    padding: 4px;
}`



export const Bars = styled(FaBars)`
display: none;
color: black;

@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.9rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    m: 80px;
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;

justify-items: space-between;


${'' /* margin-right: -24px; */}


@media screen and (max-width: 768px){
    display: none;
}
`


