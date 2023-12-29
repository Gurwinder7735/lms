import React from 'react'

import TaskFields from '../Components/TaskFields/TaskFields';
import RightSidebar from '../Components/RightSidebar';
import Form from '../Components/Form/Form';


const MyPage = () => {
  return (
   <div className="App">
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
           <TaskFields/>
        </div>
        
        <div className='col-span-6'>
           <Form/>
        </div>
        <div className='col-span-3'>
           <RightSidebar/>
        </div>
    </div>
  
 </div>
  )
}

export default MyPage