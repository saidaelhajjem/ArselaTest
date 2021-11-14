import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import { pageService } from "../../_services/pageService";
import "./ListPage.scss";
import { Link } from "react-router-dom";
export default function ListPage() {
  const [dataPage, setDataPage] = useState(null);

  useEffect(() => {
    getAllPage();
  }, []);

  const getAllPage = () => {
    pageService.getAll().then((response) => {
      if (response.success == true) {
        setDataPage(response.list);
      }
    });
  };

  const deletePage = (data) => {
    const _id = data._id;
    pageService.deletePage(_id).then((response) => {
      getAllPage();
    });
  };

  const columns = [
    {
      title: "Titre",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Lien",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link
            to={{
              pathname: `/updatepage/${record._id}`,
            }}
          >
            Modifier
          </Link>
         
          <a onClick={(e) => deletePage(record)}>Supprimer</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="globalPage">
        <h1>Nos pages </h1>
        <Table columns={columns} dataSource={dataPage} />
      </div>
    </>
  );
}
