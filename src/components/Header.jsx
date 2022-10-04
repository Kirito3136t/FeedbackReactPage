import PropTypes from 'prop-types'

import React from 'react'





function Header({text,bgcolor,textcolor}){
    const headerstyles={
        backgroundColor:bgcolor,
        color:textcolor,
    }
    return(
        <header style={headerstyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps={
    text:'Feedback UI',
    bgcolor:'rgba(0,0,0,0.4)',
    textcolor:'#FFFF00'
}

Header.propTypes={
    text:PropTypes.string,
    bgcolor:PropTypes.string,
    textcolor:PropTypes.string,
}
export default Header