import styled from 'styled-components'

export const FolderList = styled.ul`
  padding-top: 30px;
  padding-left: 30px;
  background: #222222;
`

export const Section = styled.section`
  width: 100%;
  padding: 5px;
`

export const FolderAdd = styled(Section)`
  input{
    font-size: 20px;
    color: white;
    padding-left: 2px;
    width: 115px;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 2px;
    background-color: inherit;
    margin-right: 20px;
  }
  button {
      font-size: 17px;
      font-weight: bold;
      color: white;
      border: none;
      outline: none;
      cursor: pointer;
      width: 100px;
      height: 30px;
      border-radius: 4px;
      background-color: #600000;
      margin-bottom: 8px;
  }
`