import React, { Component } from 'react';


class Daters extends Component {
  state = {
    datersLeft: [],
    datersRight: []
  }
  componentDidMount() {
    this.getDaters()
  }
  getDaters = () => {
    fetch('/users')
    .then(res => res.json())
    .then(jsonedDaters => this.setState({
        datersLeft: jsonedDaters.slice(0, 3),
        datersRight: jsonedDaters.slice(3, 6)
    }))
    .catch( error => console.error(error))
  }

  render () {
    console.log(this)

    return (
      <div>
        <h1>Hello Dating World</h1>
        <div className="HolyGrail">
            <div className="HolyGrail-body">
                <main className="HolyGrail-content"></main>

                <nav className="HolyGrail-nav">
                {this.state.datersLeft.map( daterLeft => {
                    return (
                        <div key={daterLeft.id}>
                            <h3>Name: {daterLeft.name} </h3>
                            <img src={daterLeft.img} alt={daterLeft.name}/>
                            <h4>Starsign: {daterLeft.starsign} </h4>
                            <h4>Age: {daterLeft.age} </h4>
                            {daterLeft.ltl
                                ? <h5> Loves to laugh and have a good time</h5>
                                : <h5> Hates laughing, does not like having a good time</h5>}
                        </div>
                    )})
                }
                </nav>

                <aside className="HolyGrail-ads">
                {this.state.datersRight.map( daterRight => {
                    return (
                        <div key={daterRight.id}>
                            <h3>Name: {daterRight.name} </h3>
                            <img src={daterRight.img} alt={daterRight.name}/>
                            <h4>Starsign: {daterRight.starsign} </h4>
                            <h4>Age: {daterRight.age} </h4>
                            {daterRight.ltl
                                ? <h5> Loves to laugh and have a good time</h5>
                                : <h5> Hates laughing, does not like having a good time</h5>}
                        </div>
                    )})
                }
                </aside>
            </div>
        </div>
      </div>
    )
  }
}

export default Daters;