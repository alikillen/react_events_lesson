import React from "react";
// import ColorSelector from "./components/ColorSelector";
import Canvas from "./components/canvas"
import Plaque from "./components/plaque"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World! It's react events time. </h1>
                <Canvas/>
            </div>
        )
    }
}

export default App;