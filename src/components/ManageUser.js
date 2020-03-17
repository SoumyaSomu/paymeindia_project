import React,{Component} from "react";
import UserTable from './UserTable';
import UserFormModal from './UserFormModal';
import {Modal,Button} from "react-bootstrap";
import '../styles/UserTable.css';  

class ManageUser extends Component{
  constructor(){
    super();
    this.state = {
      users: [
        {id: 1,name: "Vishal",email: "vishal@paymeindia.office",roles: [2, 3],phone:"01209876543",status:false},
        {id: 2,name: "Abhishek",email: "abhishek@paymeindia.office",roles: [1],phone:"7896654780",status:true},
        {id: 3,name: "Anil",email: "anil@paymeindia.office",roles: [5],phone:"7896654786",status:true},
        {id: 4,name: "Ajay",email: "ajay@paymeindia.office",roles: [1],phone:"7896654782",status:false},
        {id: 5,name: "Swati",email: "swati@paymeindia.office",roles: [6],phone:"7446654780",status:true},
        {id: 6,name: "Javed",email: "javed@paymeindia.office",roles: [4],phone:"7896655213",status:false}
      ],
      user : {
        id: null,
        name: "",
        email: "",
        roles: [],
        status: false
      },
      showModal: false,
      editing: false,
      roles: [
        {id:1,name:"IT"},
        {id:2,name:"Credit"},
        {id:3,name:"Accounts"},
        {id:4,name:"Operations"},
        {id:5,name:"Digital Marketing"},
        {id:6,name:"Verifications"}
      ]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editUserStatus = this.editUserStatus.bind(this);
    this.editUser = this.editUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.showModalHandler = this.showModalHandler.bind(this);
    this.hideModalHandler = this.hideModalHandler.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
  }

  showModalHandler = (event) =>{
    this.setState({showModal:true});
  }

  hideModalHandler = (event) =>{
    this.setState({showModal:false});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    const updatedUser = Object.assign({}, this.state.user, { [name]:value });
    this.setState({
      user : updatedUser
    })
  }

  editUserStatus(currentUser) {
    const updatedCurrentUser = Object.assign({}, currentUser, { status: !(currentUser.status)});
    const users = this.state.users.map((user, index) => (user.id === currentUser.id ? updatedCurrentUser : user));
    this.setState({users: users})
  }

  editUser(user) {
    this.setEditing(true);
    this.setState({
      user: user
    });
    this.showModalHandler();
    console.log(user);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateUser(event) {
    event.preventDefault();
    let updatedUser = Object.assign({}, this.state.user)
    let users = [];
    if(updatedUser.id === null) {
      updatedUser.id = this.state.users.length+1;
      users = [...this.state.users, updatedUser]
    } else {
      users = this.state.users.map((user) => (user.id === this.state.user.id ? updatedUser : user));
    }
    this.setState({users: users});
    this.setState({user :{
        id: null,
        name: "",
        email: "",
        roles: [],
        status: false
      }})
  }

  addUser(event){
    this.setEditing(false);
    this.showModalHandler();
    console.log(this.state.users);
  }

  handleMultiChange(event) {
    const target = event.target;
    const name = target.name;
    let values = []
    const options = target.options;

    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        values.push(options[i].value);
      }
    }
    
    const updatedUser = Object.assign({}, this.state.user, { [name]:values });
    this.setState({
      user : updatedUser
    })
  }

  render(){
    return(
      <div className="users-table container">
      <h1 className="center manage-users">Manage Users</h1>
      <Button 
        className="add-new-user"
        variant="primary"
        onClick={()=>this.addUser()}>
        Add New User
      </Button>
      <UserTable 
        users={this.state.users}  
        editUserStatus={this.editUserStatus}
        editUser={this.editUser}
        roles={this.state.roles}
      />
      <UserFormModal 
        showModal={this.state.showModal} 
        hideModalHandler={this.hideModalHandler}
        handleInputChange={this.handleInputChange}
        editing={this.state.editing}
        updateUser={this.updateUser}
        user={this.state.user}
        roles={this.state.roles}
        handleMultiChange={this.handleMultiChange}
      />
      </div>
    )
  }
}

export default ManageUser;
