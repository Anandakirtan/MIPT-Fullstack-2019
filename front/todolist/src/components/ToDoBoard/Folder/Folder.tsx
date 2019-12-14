import React from 'react'
import * as S from './styled'

interface IFolder {
    name : string
}

const Folder: React.FC<IFolder> = (props) => {
    const { name } =  props

    return (
        <S.Folder>
            <div>{name}</div>
        </S.Folder>
    )
}

export default Folder