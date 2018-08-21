import React, {Component} from 'react'
import './App.css'


function ImageOne (props) {
        return (
            <div>
                <img src={props.theImage} alt=""/>
            </div>
        )
}

export default ImageOne