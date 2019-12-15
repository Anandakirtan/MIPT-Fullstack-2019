import React from 'react'
import Header from './Header/Header'
import FolderList from './FolderList/FolderList'
import TaskList from './TaskList/TaskList'
import getIsAuth from '../../utils/getIsAuth'

import * as S from './styled'


const ToDoBoard: React.FC = () => {

  
  return (
    <div className="ToDoBoard">
      <Header />
      {getIsAuth() ? (
        <S.ContentWrapper>
          <S.SideBar>
            <FolderList />
          </S.SideBar>
          <S.MainBody>
            <TaskList />
          </S.MainBody>
        </S.ContentWrapper>
      ) : (
        window.location.href = '/'
      )}
    </div>
  );
}

export default ToDoBoard