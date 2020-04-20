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
      color += sub.length === 1 ? "0" + sub : sub;
    }
    return "#" + color;
  };

  onColorCreate = () => {
    const color = this.randomColor();
    this.setState(() => {
      return { colors: [...this.state.colors, color] };
    });
  };

  onRemoveColor = (color) => {
    this.setState(() => {
      let colors = this.state.colors.filter((c) => {
        return c !== color;
      });
      return { colors: colors };
    });
  };

  colorElements = (colors) => {
    if (colors.length === 0) {
      return this.emptyElement();
    }
    return colors.map((color) => {
      return (
        <div className="color-component" key={color}>
          <div className="color" style={{ backgroundColor: color }}>
            {color}
          </div>
          <button
            onClick={() => {
              this.onRemoveColor(color);
            }}
          >
            Remove
          </button>
        </div>
      );
    });
  };

  emptyElement = () => {
    return <div className="no-colors">There are No colors yet</div>;
  };

  render() {
    let colors = this.colorElements(this.state.colors);

    return (
      <div>
        <div className="colors-container">{colors} </div>
        <button onClick={this.onColorCreate}>Create</button>
      </div>
    );
  }
}
export default ColorGenerator;
