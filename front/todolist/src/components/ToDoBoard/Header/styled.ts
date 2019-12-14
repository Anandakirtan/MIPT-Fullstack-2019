import styled, {keyframes} from 'styled-components'

export const Header = styled.header`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    height: 45px;
    width: 100% ;
    background-color: #303030;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);
`

export const InnerHeader = styled.div`
    display: flex;
    justify-content: left;
    width: 950px;
`

export const Title = styled.span`
    margin-top: 11px;
    font-size: 25px;
    color: white;
    margin-left: 5px;
`

export const Settings = styled.img`
    margin-top: 10px;
    width: 30px;
    height:30px;
    margin-left: 770px;
`