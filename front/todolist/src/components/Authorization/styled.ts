import styled from 'styled-components'

export const Section = styled.section`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const FormWrapper = styled(Section)`
  display: flex;
  justify-content: space-around;
  form {
    position: relative;
    top: -60px;
    background-color: rgb(31,31,31);
    padding: 20px 20px 10px 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    button {
      font-size: 17px;
      font-weight: bold;
      color: white;
      border: none;
      outline: none;
      cursor: pointer;
      width: 100%;
      height: 30px;
      border-radius: 4px;
      background-color: #600000;
      margin-bottom: 8px;
    }
  }
`

export const FormItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  label {
    width: 150px;
  }
  input {
    padding-left: 2px;
    width: 150px;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    background-color: #808080;
  }
`