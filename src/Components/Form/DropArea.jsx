import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { addToFormField, updateFormFields } from '../../store/features/common'
import { dragIdSelector, formFieldsSelector } from '../../store/features/common/selectors'
import InputEdit from './InputEdit'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const DropArea = () => {

    const dispatch = useAppDispatch()
    const dragId = useAppSelector(dragIdSelector)
    const formFields = useAppSelector(formFieldsSelector)
    

    const handleOnDrop = (e) => {    
        const id = e.dataTransfer.getData("id");
         dispatch(addToFormField(id))
    }

    const handleDragOver = (e) => {
         e.preventDefault()
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;



        alert(result.source.index)
        const items = Array.from(formFields);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        dispatch(updateFormFields(items))
      };

  return (
    <>
   <DragDropContext onDragEnd={handleOnDragEnd}>
  <Droppable droppableId="formFields">
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {formFields.map((field, index) => (
          <Draggable key={field.id.toString()} draggableId={field.id.toString()} index={index} droppableId="formFields">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <InputEdit {...field} />
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>

    <div
    className='text-gray-400 bg-gray-100 border border-dotted border-1 border-gray-400 p-3 my-5 text-center'
    onDrop={handleOnDrop}
    onDragOver={handleDragOver}
   >
       Add field by dragging it into this area
   </div>
   </>
  )
}

export default DropArea