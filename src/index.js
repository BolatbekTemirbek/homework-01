import React from "react"
import ReactDom from "react-dom"

const element = <h1> Hello world, меня зовут Темирбек</h1>
ReactDom.render(element, document.getElementById('root'))
console.log(element);