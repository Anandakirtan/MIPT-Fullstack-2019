import React from 'react'
import * as S from './styled'
import Task from '../Task/Task' 
import getIsAuth from '../../../utils/getIsAuth'
import TaskBlock from './TaskBlock/TaskBlock'


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

function TaskList() {
  //const [tasks, setTasks] = React.useState<ITask[]>([])

  React.useEffect(() => {
    //void taskGet()
    void folderGet()
  }, [])

  /*const taskGet = React.useCallback(async () => {
    const response = await fetch('http://localhost:8000/api/my_tasks/', {
      headers: {
        'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
      }
    })
    const data = await response.json()

    setTasks(data)
  }, [])*/

  const [folders, setFolders] = React.useState<IFolder[]>([])

  const folderGet = React.useCallback(async () => {
    const response = await fetch('http://localhost:8000/api/my_folders/', {
      headers: {
        'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
      }
    })
    const data = await response.json()

    setFolders(data)
  }, [])

  const [newTask, setNewTask] = React.useState('')
  const [folder_id, set_folder_id] = React.useState('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      const data = JSON.stringify({
         newTask,
         folder_id
      })
      console.log(newTask)
      console.log(folder_id)
      await fetch('http://localhost:8000/api/tasks/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
        },
        body: JSON.stringify({name: newTask, folder: folder_id})
      })
    },
    [newTask, folder_id]
  )

  
  return (
      <S.TaskList>

          {folders.map((folder, index) => (
            <TaskBlock {...folder}/>
          ))}
          
          <S.TaskAdd>
            <input
              type="text"
              name="newTask"
              placeholder="Новая задача"
              required
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />

            <select onChange={(event) => set_folder_id(event.target.value)}>
              <option> </option>
              {folders.map((folder, index) => (
                <option key={index} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>

            <button type="submit" onClick={onSubmit}>
              Добавить
            </button>

          </S.TaskAdd>
      </S.TaskList>
  )
}

export default TaskList