import React, { useState } from 'react'
import { Button, Input } from 'antd';
import { Typography } from 'antd';
import InputEdit from './InputEdit';
import { useAppSelector } from '../../store/hook';
import { formFieldsSelector } from '../../store/features/common/selectors';
import DropArea from './DropArea';
import FileUpload from './FileUpload';


const { Title } = Typography;


const Form = () => {

  



  return (
    <div>
       
     <div className='text-center'>
     <FileUpload/>
      </div>
      <p className='text-center'><Title level={3} contentEditable className='focus:outline-none'>Form</Title></p>
        <div className='text-center'>
           <Input.TextArea  className='w-full border-none outline-none placeholder:text-center' placeholder='Add form description' rows={5}></Input.TextArea>
        </div>

       
     



       <DropArea/>
        <div className='text-center'> 
        <Button type="primary" className='w-full focus-visible:outline-none h-10' ghost contentEditable>
            Submit
        </Button>
        </div>
  
         
    </div>
  )
}

export default Form