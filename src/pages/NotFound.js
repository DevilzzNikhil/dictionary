import React from 'react'
import "../css/NotFound.css"

function NotFound() {

    const handleMove = (e)=> {
        var x =- e.clientX/5;
        var y =- e.clientY/5;
        if( e.target.id === 'container')
            e.target.style.backgroundPositionX = x + 'px';
            e.target.style.backgroundPositionY = y + 'px';
    }


  return (
    <div id="container" onMouseMove={handleMove}>
        <div className="content">
            <h2>404</h2>
            <h4>Opps! Page not found</h4>
            <p>The page you are looking for doesnot exixt. You may have mistyped the address or the page may have moved</p>
            <a href="/">Back To Home</a>
        </div>
    </div>
  )
}

export default NotFound