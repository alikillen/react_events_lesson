import React from "react";

// changing from class (see comments below) to pure function - inverting control
// no longer has any state

const ColorSelector = (props) => {
  const{changeHandlerCb, hex} = props

  function changeHandler(event){
    changeHandlerCb(event.target.value)
    // callback gets the value that the user has just specified in the picker
  }
  return(
    <input
      type = "color"
      value={hex}
      onCHange={changeHandler}/>
  )
}

export default ColorSelector

// class ColorSelector extends React.Component {
  //   constructor(props){
  //     super(props)
  //     this.state = {hex: props.hex}
  //   }
  
  //   handleChange = (event) => {
  //     console.log(event.target.value)
  //     this.setState({hex: event.target.value})
  //   }
  
  //   render() {
  //     const {hex} = this.state
  //     // we dont want this to be this.props cause props is set to a default value - need to use state
  //     // do not change props - you can only read them
  //     return(
  //       <input type="color" value={hex} onChange ={this.handleChange} />
  //     )
  //   }
  // }
  
  // ColorSelector.defaultProps = {
  //   hex: "#f4424b"
  // }