import React from 'react'
import * as S from './styled'
import Task from '../Task/Task' 

export interface ITask {
    name : string
    description : string
    /*deadline = models.DateField(auto_now=False, help_text="set a deadline")
    folder = models.ForeignKey(Folder, default = 2, on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    name: string
    price: number
    id: string*/
  }

function TaskList() {
    const [products, setTasks] = React.useState<ITask[]>([])

    React.useEffect(() => {
      void taskGet()
    }, [])
  
    const taskGet = React.useCallback(async () => {
      const response = await fetch('http://localhost:8000/api/tasks/')
      const data = await response.json()
  
      setTasks(data)
    }, [])

    return (
        <S.TaskList>
            <Task text='First task'/>
            <Task text='Second task'/>
            <Task text='Afternoon murder'/>
        </S.TaskList>
    )
}

export default TaskList