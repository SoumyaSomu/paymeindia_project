import React,{Component} from 'react';
import '../styles/SideBarMenu.css';

class SideBarMenu extends Component{
    render(){
        return (
            <div className="sidebar">
              <a href="#roles">
              <i className="fas fa-user-circle sidebar-icon"></i>
              Manage Roles
              </a>
              <a href="#priviliges">
              <i className="fas fa-shield-alt sidebar-icon"></i>
              Manage Priviliges
              </a>
              <a className="active" href="#users">
              <i className="fas fa-users sidebar-icon"></i>
              Manage Users
              </a>
            </div>
        )
    }
}

export default SideBarMenu;