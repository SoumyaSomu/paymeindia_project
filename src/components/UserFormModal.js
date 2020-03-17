import React,{Component} from "react";
import {Modal,Button} from "react-bootstrap";
import '../styles/UserModal.css';

class UserFormModal extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Modal show={this.props.showModal} onHide={this.props.hideModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title className="heading">{this.props.editing ? 'Edit User' : 'Add New User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.props.updateUser}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  value={this.props.user.name}
                  onChange={this.props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Email:</label>
                <input 
                 type="text"
                 className="form-control"
                 placeholder="Enter email"
                 name="email"
                 value={this.props.user.email}
                 onChange={this.props.handleInputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  name="phone"
                  value={this.props.user.phone}
                  onChange={this.props.handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="roles" className="margin-bottom-25">Roles:</label>
              <select name="roles"
              onChange={this.props.handleMultiChange}
              className="form-control"
              value={this.props.user.roles}
              multiple>
                {this.props.roles.map((role) => <option key={role.id} value={role.id}>{role.name}</option>)}
              </select>
            </div>
            <Button type="submit" className="submit" variant="primary" onClick={this.props.hideModalHandler}>
              Submit
            </Button>
          </form>
        </Modal.Body>
        </Modal>
    );
  }
}

export default UserFormModal;