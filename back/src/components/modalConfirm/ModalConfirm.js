import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';



export default function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: 'Accepter',
    cancelText: 'Anuler',
  });


  return(
      <>
       <Space>
   
   <Button onClick={confirm}>Confirm</Button>
 </Space>,
      </>
  )
}

