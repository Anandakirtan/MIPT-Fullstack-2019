import React from 'react'
import * as S from './styled'
import Task from '../Task/Task' 
import getIsAuth from '../../../utils/getIsAuth'

export interface ITask {
    name : string
    /*deadline = models.DateField(auto_now=False, help_text="set a deadline")
    folder = models.ForeignKey(Folder, default = 2, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)*/
}

function TaskList() {
  const [tasks, setTasks] = React.useState<ITask[]>([])

  React.useEffect(() => {
    void taskGet()
  }, [])

  const taskGet = React.useCallback(async () => {
    const response = await fetch('http://localhost:8000/api/tasks/', {
      headers: {
        'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
      }
    })
    const data = await response.json()

    setTasks(data)
  }, [])

  const [newTask, setNewTask] = React.useState('')

  const onSubmit = React.useCallback(
    async (event) => {
      event.preventDefault()
      // const data = JSON.stringify({
      //   newTask,
      // })

      await fetch('http://localhost:8000/api/tasks/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
        },
        body: JSON.stringify({newTask})
      })
    },
    [newTask]
  )

  return (
      <S.TaskList>
          {tasks.map((task, index) => (
            <Task key={index} text={task.name}/>
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
            <button type="submit" onClick={onSubmit}>
              Добавить
            </button>
          </S.TaskAdd>
      </S.TaskList>
  )
}

export default TaskList