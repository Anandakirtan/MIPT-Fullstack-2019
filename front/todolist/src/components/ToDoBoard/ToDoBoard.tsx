import React, { Component } from 'react'
import Header from './Header/Header'
import FolderList from './FolderList/FolderList'
import TaskList from './TaskList/TaskList'

import * as S from './styled'


const ToDoBoard: React.FC = () => {

  
  return (
    <div className="ToDoBoard">
      <Header />
      <S.ContentWrapper>
        <S.SideBar>
          <FolderList />
        </S.SideBar>
        <S.MainBody>
          <TaskList />
        </S.MainBody>
      </S.ContentWrapper>
    </div>
  );
}

export default ToDoBoard