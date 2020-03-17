import React, {Component} from 'react';
import ManageUser from './components/ManageUser';
import SideBarMenu from './components/SideBarMenu';
import SearchMenu from './components/SearchMenu';

class App extends Component{

  render(){
    return(
    <div>
    	<div>
    	    <SearchMenu/>
    	</div>
	    <div className="main-container">
			<SideBarMenu/>
			<ManageUser/>
	    </div>
    </div>
    )
  }
}

export default App;
