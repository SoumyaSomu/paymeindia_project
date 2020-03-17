import React,{Component} from 'react';
import '../styles/UserTable.css';

class UserTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userList = this.props.users.length ? (
      this.props.users.map((user,index) => {
        return(
          <tr key={user.id}>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{this.props.roles.filter((role) => { return user.roles.includes(role.id)}).map((role) => role.name).join(",")}</td>
            <td className="pd-top">
              <i className="fas fa-pen-square edit-icon" onClick={() => this.props.editUser(user)}></i>
              <i className="fas fa-shield-alt shield-icon"></i>
            </td>
            <td>
            <form action="#">
                <div className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-checkbox"
                  name={"status"+user.id}
                  id={"status"+user.id}
                  onChange={() => this.props.editUserStatus(user) }
                  checked={user.status}/>
                <label className="toggle-switch-label" htmlFor={"status"+user.id}>
                  <span className="toggle-switch-inner" />
                  <span className="toggle-switch-switch" />
                </label>
              </div>
            </form>
            </td>
          </tr>
        )
      })
    ) : (
    <p className="center">You have no users present.Please add a new user.!!!!</p>
  )
    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-heading">S.No</th>
            <th scope="col" className="table-heading">Name</th>
            <th scope="col" className="table-heading">Email</th>
            <th scope="col" className="table-heading">Role</th>
            <th scope="col" className="table-heading">Action</th>
            <th scope="col" className="table-heading">Status</th>
          </tr>
        </thead>
        <tbody>
        {userList}
        </tbody>
      </table>
      </div>
    )
  }
}

export default UserTable;