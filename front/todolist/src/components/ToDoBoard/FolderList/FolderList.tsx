import React from 'react'
import Folder from '../Folder/Folder'
import * as S from './styled'


function FolderList() {
    return (
        <S.FolderList>
            <Folder name={'Front'}/>
            <Folder name={'Backendend'}/>
            <Folder name={'Murders'}/>
        </S.FolderList>
    )
}

export default FolderList