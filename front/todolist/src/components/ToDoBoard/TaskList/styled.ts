import styled, { keyframes } from 'styled-components'

export const TaskList = styled.ul `
  padding-top: 29px;
  margin-left: 15px;
`

export const Section = styled.section`
  margin-top: 10px;
  width: 100%;
`

export const TaskAdd = styled(Section)`
  input{
    font-size: 20px;
    color: white;
    padding-left: 2px;
    width: 55%;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 2px;
    background-color: inherit;
    margin-right: 10px;
  }
  select{
    font-size: 16px;
    background-color: #303030;
    color: white;
    width: 10%;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    border-radius: 3px;
    outline: none;
    appearance: none;
    cursor: pointer;
    margin-right: 20px;
    padding: 2px;    
  }
  select:hover{
    animation: fadeOut 50ms;
  }
  button {
    font-size: 17px;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    width: 110px;
    height: 25px;
    border-radius: 4px;
    background-color: #600000;
  }
`
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`


const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`