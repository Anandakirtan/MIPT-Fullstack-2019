import styled from 'styled-components'

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
    width: 50%;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 2px;
    background-color: inherit;
    margin-right: 10px;
  }
  button {
    font-size: 17px;
    font-weight: bold;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    width: 30%;
    height: 25px;
    border-radius: 4px;
    background-color: #600000;
  }
`