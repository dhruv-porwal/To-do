import React from 'react'
import PropTypes from 'prop-types'
import{ BrowserRouter as Router,
  Switch,
  Route,
Link} from 'react-router-dom';
// props are js objects which are passed from js parent component to js children component
export default function Header(props) {
  return (
//passing data from parent component to child component using props, also we can use {title,...other values} in place ofprops in curly bracket ??? passing values inside header
    
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><b>About</b></Link>
          </li>

          </ul>
            {props.searchBar? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>:"blanky "}
      </div>
    </div>
  </nav>
  
      
  )
}
Header.propTypes={
  title:PropTypes.string,
  searchBar:PropTypes.bool
}
Header.defaultProps={
  title:"mamamia",
  searchBar:true
}