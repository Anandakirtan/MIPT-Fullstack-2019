import styled from 'styled-components'

export const Task = styled.li `
  padding: 10px 15px;
  font-size: 16px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input[type=checkbox] {
    cursor: pointer;
    outline: none;
    margin-right: 25px;
    appearance: none;
    background-color: #424242;
    border: 1px solid #6d6d6d;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    padding: 9px;
    border-radius: 10px;
    display: inline-block;
    position: relative;
  }

  input[type=checkbox]:active, input[type=checkbox]:checked:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px #e9ecee;
  }

  input[type=checkbox]:checked {
    background-color: #303030;
    border: 1px solid #6d6d6d;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #8f8f8f;
  }

  input[type=checkbox]:checked:after {
    content: '\\2714';
    font-size: 16px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: #666666;
  }
`

/*
  
  input[type=checkbox] {
    margin-right: 25px;
    appearance: none;
    background-color: #424242;
    border: 1px solid #6d6d6d;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    padding: 9px;
    border-radius: 10px;
    display: inline-block;
    position: relative;
  }
  
  input[type=checkbox]:active, input[type=checkbox]:checked:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px #e9ecee;
  }
  
  input[type=checkbox]:checked {
    background-color: #303030;
    border: 1px solid #6d6d6d;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #8f8f8f;
  }
  
  input[type=checkbox]:checked:after {
    content: '\2714';
    font-size: 14px;
    position: absolute;
    top: 0px;
    left: 4px;
    color: #666666;
  }
*/