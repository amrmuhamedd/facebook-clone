import React from 'react'
import './widgets.css'
function widgets() {
    const width = window.innerWidth < 720
    return (
        <div className = "widgets">
            {!width ? <iframe src= "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FProgramming-248113046110399&tabs=timeline&width=380&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
           width="320" 
           height="100%"
           style={{border:"none", overflow: "hidden"}}
           scrolling="no" 
           frameborder="0" 
           allowTransparency="true"
            allow="encrypted-media"></iframe> : null}
           
        </div>
    )
}

export default widgets
