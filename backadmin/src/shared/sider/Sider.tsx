import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {

  UploadOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
  TableOutlined,
  FolderAddOutlined,
  FormOutlined,
} from '@ant-design/icons';
import "./Sider.scss";

const { Header, Sider, Content } = Layout;
class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<FormOutlined />}>
                Créer formulaire
              </Menu.Item>
              <Menu.Item key="2" icon={<FolderAddOutlined />}>
                Créer page
              </Menu.Item>
              <Menu.Item key="3" icon={<TableOutlined />}>
               Pages
              </Menu.Item>
              <Menu.Item key="4" icon={<UserSwitchOutlined />}>
              Utilisateurs
              </Menu.Item>
              <Menu.Item key="5" icon={<LogoutOutlined  />}>
               Déconnection
              </Menu.Item>
            </Menu>
          </Sider>
      
        </Layout>
      );
    }
  }


export default SiderDemo;