import React from 'react'

const Footer = () => {
 let footerStyle={
    position: "relative",
    top: "100vh",
    width: "100%",
   height:"100%",
   margin:"5px",
    border:"2px solid red"
  }
  return ( <footer className="bg-dark text-light py-3" style={footerStyle}>
     <p className="text-center">
     Copyright &copy; MyTodosList.com
     </p>
     

    </footer>
  )
}

export default Footer
