import React,{Component} from 'react';
import '../styles/SearchMenu.css';


class SearchMenu extends Component{
    render(){
        return (
            <div className="search-menu">
              <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i className="fas fa-bars bars"></i>
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                  aria-label="Search"/>
              </form>
            </div>
        )
    }
}

export default SearchMenu;