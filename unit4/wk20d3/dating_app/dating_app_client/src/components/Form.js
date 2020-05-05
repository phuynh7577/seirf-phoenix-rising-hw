import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    age: "",
    starsign: "",
    ltl: "",
    img: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { name, age, starsign, ltl, img } = this.state;
    const dater = {
      name: name,
      age: age,
      starsign: starsign,
      ltl: ltl,
      img: img
    };

    if (this.props.dater) dater.id = this.props.dater.id;

    this.props.handleSubmit(event, dater);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"age"}
          placeholder={"Age"}
          type={"text"}
          value={this.state.age}
          id={"age"}
        />
        <Input
          handleChange={this.handleChange}
          name={"starsign"}
          placeholder={"Starsign"}
          type={"text"}
          value={this.state.starsign}
          id={"starsign"}
        />
        <Input
          handleChange={this.handleChange}
          name={"ltl"}
          placeholder={"ltl"}
          type={"text"}
          value={this.state.ltl}
          id={"ltl"}
        />
        <Input
          handleChange={this.handleChange}
          name={"img"}
          placeholder={"img"}
          type={"text"}
          value={this.state.img}
          id={"img"}
        />
        <input
          type="submit"
          value={this.props.dater ? "update this notice" : "add a notice"}
        />
      </form>
    );
  }
}

export default Form;