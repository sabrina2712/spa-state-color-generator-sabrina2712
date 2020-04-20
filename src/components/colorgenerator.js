import React, { Component } from "react";

class ColorGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { colors: [] };
  }

  randomColor = () => {
    var color = "";
    for (var i = 0; i < 3; i++) {
      var sub = Math.floor(Math.random() * 256).toString(16);
      color += sub.length == 1 ? "0" + sub : sub;
    }
    return "#" + color;
  };

  onColorCreate = () => {
    const color = this.randomColor();
    this.setState(() => {
      return { colors: [...this.state.colors, color] };
    });
  };
  render() {
    let colors = this.state.colors.map((color) => {
      return (
        <div className="color-component">
          <div className="color" style={{ backgroundColor: color }}>
            {color}
          </div>
          <button>Remove</button>
        </div>
      );
    });

    return (
      <div>
        <p className="colors-container">{colors} </p>
        <button onClick={this.onColorCreate}>Create</button>
      </div>
    );
  }
}
export default ColorGenerator;
