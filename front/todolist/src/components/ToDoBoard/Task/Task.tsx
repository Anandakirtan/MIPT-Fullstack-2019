import React from 'react'
import * as S from './styled'

interface TaskProps {
    text : string
}

const Task: React.FC<TaskProps> = (props) =>{
    const { text }  = props

    return (
        <S.Task>
            <input type="checkbox" />
            <p>{text}</p>
        </S.Task>
    )
}

export default Task