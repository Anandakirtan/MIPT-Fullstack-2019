import styled from 'styled-components'

export const ContentWrapper = styled.div `
  display: flex;
  margin-top: 44px;
  min-height: calc(100vh - 44px);
  width: 950px;
`

export const SideBar = styled.div `
  width: 30%;
  height: calc(100vh - 44px);
  background-color: rgb(35,35,35);
`

export const MainBody = styled.div `
  width: 70%;
  height: calc(100vh - 44px);
  background-color: rgb(31,31,31);
`