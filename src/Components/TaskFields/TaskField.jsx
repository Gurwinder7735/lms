import React from 'react'
import { useAppSelector } from '../../store/hook'
import { taskFieldSelector } from '../../store/features/common/selectors'

const TaskField = () => {
  const taskFields = useAppSelector(taskFieldSelector)

  
  return (
    <div>TaskField</div>
  )
}

export default TaskField