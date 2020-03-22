class DivOne extends React.Component {
  render() {
      return (
        <div>
          <Tardis tardis={this.props.tardis}/>
        </div>
      )
  }
}

class DivTwo extends React.Component {
  render() {
      return (
        <div>
          <DivOne tardis={this.props.tardis}/>
          <DivOne tardis={this.props.tardis}/>
        </div>
        
      )
  }
}

class DivThree extends React.Component {
  render() {
      return (
        <div>
          <DivTwo tardis={this.props.tardis}/>
        </div>
      )
  }
}

class Tardis extends React.Component {
  render() {
      return (
          <h3>{this.props.tardis.name}</h3>
      )
  }
}

class App extends React.Component {
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
      }
    }

    changeIt = (text) => {
        let tardis = this.state.tardis.name
        console.log("App - changeIt - name", text);
        if(this.state.tardis.caps) {
            this.setState({
                tardis:{
                name: tardis.toLowerCase(),
                caps: false
                }
            });
        } else {
            this.setState({
                tardis: {
                    name: tardis.toUpperCase(),
                    caps: true
                }
            });
        }
    }

    render() {
        return (
          <div onClick={this.changeIt}>
                <DivThree tardis={this.state.tardis}/>
          </div>  
        )
    }
  }


ReactDOM.render(
    <App/>, 
    document.querySelector(".container")
)