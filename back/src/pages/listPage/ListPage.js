import React , {  useEffect, useState }from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import { pageService } from "../../_services/pageService";
export default function ListPage() {
    const [dataPage, setDataPage] = useState(null);


    useEffect(() => {
        getAllPage();
       
      }, []) 

    const getAllPage = () => {
        pageService.getAll().then((response) => {
          if (response.success == true) {
            setDataPage(response.list)
              };})
          } 
      
          const deletePage = (data) => {
            pageService.deletePage(data).then((response) => {
             
              })
              } 

    const columns = [
        {
          title: 'Titre',
          dataIndex: 'title',
          key: 'title',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Lien',
          dataIndex: 'link',
          key: 'link',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Modifier</a>
              <a  >Supprimer</a>
            </Space>
          ),
        },
      ];
      


    return (
        <div>
           <Table columns={columns} dataSource={dataPage} /> 
        </div>
    )
}
