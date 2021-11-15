import { Input } from "antd";
import Sider from "antd/lib/layout/Sider";
import TextArea from "rc-textarea";
import React, { useState, useEffect } from "react";
import "./CreatePage.css";
import { pageService } from "../../_services/pageService";
import { useHistory } from "react-router-dom";

const CreatePage = (props) => {
  const userId = props.match.params.id;
  const [update, setUpdated] = useState(false);
  useEffect(() => {
    if (userId) {
      getPage(userId);
      setUpdated(true);
    }
  }, [userId]); // N’exécute l’effet que si userId a changé

  const getPage = (data) => {
    pageService.getPage(data).then((response) => {
      setDataPage(response);
    });
  };

  const [dataPage, setDataPage] = useState({
    title: "",
    link: "",
    description: "",
  });

  const history = useHistory();

  const changeHandler = (e) => {
    setDataPage({ ...dataPage, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userId) {
      updatePage(dataPage);
    } else {
      createPage(dataPage);
    }
  };

  const createPage = (data) => {
    pageService.create(data).then((response) => {
      if (response.success == true) {
        history.push(`/listpage`);
      }
    });
  };

  const updatePage = (data) => {
    pageService.updatePage(userId, data).then((response) => {
      if (response.success == true) {
        history.push(`/listpage`);
      }
    });
  };

  return (
    <div className="auth">
      <div className="title-auth">
        <h1> la création de page</h1>
      </div>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <div className="blc-input">
            <label>title</label>
            <Input
              type="text"
              name="title"
              value={dataPage.title}
              onChange={changeHandler}
            />
          </div>
          <div className="blc-input">
            <label>link</label>
            <Input
              type="text"
              name="link"
              value={dataPage.link}
              onChange={changeHandler}
            />
          </div>
          <div className="blc-input">
            <label>description</label>
            <TextArea
              type="text"
              name="description"
              value={dataPage.description}
              onChange={changeHandler}
              rows={4}
            />
          </div>
          {update ? (
            <button type="submit">Modifier</button>
          ) : (
            <button type="submit">Envoyer</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
