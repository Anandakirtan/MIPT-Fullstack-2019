import React from 'react'
import * as S from './styled'
import Task from '../../Task/Task' 

export interface ITask {
    name : string
    /*deadline = models.DateField(auto_now=False, help_text="set a deadline")
    folder = models.ForeignKey(Folder, default = 2, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)*/
}

export interface IFolder {
  id: number
  name : string
  task_set: ITask[]
}



const TaskBlock: React.FC<IFolder> = (props) => {
  const {id, name, task_set} = props

  return (
    <S.TaskBlockWrapper>
      <S.FolderName>{name}</S.FolderName>
      {task_set.map((task, index) => (
          <Task key={index} text={task.name}/>
      ))}
    </S.TaskBlockWrapper>
  )
}

export default TaskBlock