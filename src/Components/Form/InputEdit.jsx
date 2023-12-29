import React from 'react'
import { Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { message, Upload } from 'antd'


import { Input } from 'antd';
import { DraggableInputFile } from './DraggableInputFile';
import { useAppDispatch } from '../../store/hook';
import { removeFromFormField } from '../../store/features/common';
const { Title } = Typography;



const InputEdit = ({
   type,
   id
}) => {

  const dispatch = useAppDispatch();

  console.log(id,"id>>>>>>")

  return (
    <div className='bg-white p-4 border border-gray-200 my-3 rounded-md'>
        <div className='flex justify-between'>
            <div className='flex items-center'>
            <span className='py-1 px-2 mr-2 rounded-md bg-purple-100'>01</span>
            <Title level={4} contentEditable className='focus:outline-none' style={{
                margin:0
            }}>Task Name</Title>
            </div>

            <div>
                 <span className='mr-3'>
                     Task Name
                 </span>
                 <span>
                 <DeleteOutlined style={{color: "red"}} onClick={() => dispatch(removeFromFormField(id))}/>
                 </span>
            </div>
            
        </div>
        <div className='my-2 '>
        {["text","textarea"].includes(type) && <Input placeholder="Enter text (Placeholder)" className='my-4'/>}
        {type == "file" && <DraggableInputFile/>}
        </div>
        <div className='text-end'>
        <Checkbox>Required</Checkbox>
            
        </div>

        
    </div>
  )
}

export default InputEdit