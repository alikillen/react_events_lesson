import React from "react";

const plaqueStyle = {
  border: "3px solid black",
  margin: "1em",
  padding: "1em",
  backgroundColor: "gold",
  display: "inline-block"

}

class Plaque extends React.Component{
  constructor(props){
    super(props)
    const {painter, painting} = props
    this.state = {painter, painting}
  }

  bindtoState(event, stateVal){
    this.setState({[stateVal]: event.target.value})
  }

  render(){
    const {painter, painting} = this.state
    return(
      <div>
        <div style = {plaqueStyle}>
          <h2> {painting}</h2>
          <h3> {painter> </h3>
        </div>
        <div>
          <input
            type = "text"
            defaultValue = "painting name here"
            onChange = {(event) => this.bindToState(e, 'painting')}/>
          <input
            type = "text"
            defaultValue = "painter name goes here"
            onChange= {(event) => this.bindtoState(event, "painter")}/>
        </div>

      </div>
    )
  }

}

Plaque.defaultProps = {
  painter: "anon"
  painting: "untitled #9001"
}

export default Plaque;