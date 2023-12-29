import { UpSquareFilled, UpSquareOutlined } from '@ant-design/icons'
import React, { useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { formFieldsSelector, taskFieldSelector } from '../../store/features/common/selectors'
import { addToFormField, setDragId } from '../../store/features/common'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'

const TaskFields = () => {

  const taskFields = useAppSelector(taskFieldSelector)
  const formFields = useAppSelector(formFieldsSelector)
  const dispatch = useAppDispatch()

  const [filteredItems, setFilteredItems] = useState([])

  console.log(taskFields,"task fields")
  console.log(formFields,"form fields")


  useEffect(() => {

    const formFieldIds = formFields.map((f) => f.id)
    const filteredItems = taskFields.filter((tf) => {
        console.log(tf.id,"tf.id")
        console.log(formFieldIds,"formFieldIds")
        console.log(formFieldIds.includes(tf.id))
        return !formFieldIds.includes(tf.id)

    })
    setFilteredItems(filteredItems)
 
   console.log(filteredItems,"vfilteredItems")
  },[formFields])


  const handleDragStart = (e,id) => {
    e.dataTransfer.setData('id', id); // Set the data to be transferred (element's ID)
    
    // dispatch(setDragId(id))
  };

  const handleDragEnd = (e) => {
    console.log('Drag operation completed');
    // alert("drag ended")
    // dispatch(setDragId(null))
  };

  
  return (

    <div className='mx-3'>
      <p className='py-3'>Task Fields</p>
       {filteredItems.map((f,i) => {
         return (

           <div className='flex py-2 hover:cursor-pointer' key={i}
           onClick={() => dispatch(addToFormField(f.id))} draggable 
           onDragStart={(e) => handleDragStart(e, f.id)}
           onDragEnd={handleDragEnd}
           >
             <div className='flex mr-2'>
             <span className='mr-4'>
              <UpSquareOutlined />
              </span>
              
              <p>{f.name}</p>
             </div>
             <p>+</p>
            </div>
            
         )
       })}
    </div>
  )
}

export default TaskFields