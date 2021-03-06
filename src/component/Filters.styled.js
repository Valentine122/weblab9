import styled from 'styled-components';

export const Input = styled.input`
    color: black;
    border-radius:6px;
border:1px solid grey;
font-size:15px;
height: 37px;
margin-right: 10px;
padding-left: 10px;
padding-right: 10px;
width: 150px;
    
`

export const Option = styled.option`
    color: grey;
    &:hover{
        background-color: red;

    }

    
`

export const InputButton = styled.input`
box-shadow:inset 0px 1px 0px 0px #ffffff;
background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
background-color:#ededed;
border-radius:6px;
border:1px solid grey;
display:inline-block;
cursor:pointer;
color:#777777;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #ffffff;
margin-right: 10px;
&:hover {
background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
background-color:#dfdfdf;
&:active {
position:relative;
top:1px;

    
`
export const Select = styled.select`
    color: black;
    border-radius:6px;
border:1px solid grey;
font-size:15px;
height: 37px;
margin-right: 10px;
padding-left: 10px;
padding-right: 10px;
width: 150px;
background-color: transparent;
select-items:{
    div:{
        &:hover{
            background-color: red;

        }
    
    }
  }
 
    
`

export const Button = styled.button`
box-shadow:inset 0px 1px 0px 0px #ffffff;
background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
background-color:#ededed;
border-radius:6px;
border:1px solid grey;
display:inline-block;
cursor:pointer;
color:#777777;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px 1px 0px #ffffff;
margin-right: 10px;
&:hover {
background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
background-color:#dfdfdf;
&:active {
position:relative;
top:1px;

    
`
