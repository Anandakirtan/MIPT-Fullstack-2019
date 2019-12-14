import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styled'
import cogwheelImage from './cogwheel.svg'

const Header: React.FC = () => {
    return (
        <S.Header>
            <S.InnerHeader>
                <S.Title>Ежедневник</S.Title>
                <Link to="/auth"><S.Settings src={cogwheelImage}/></Link>
            </S.InnerHeader>
        </S.Header>
    )
}

export default Header