import React from 'react'
import { message, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;


export const DraggableInputFile = () => {

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

  return (
       <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    {/* <p className="ant-upload-text">Click or drag file to this area to upload</p> */}
    <p className="ant-upload-hint">
     Darg and drop files here (Placeholder)
    </p>
  </Dragger> 
  )
}
