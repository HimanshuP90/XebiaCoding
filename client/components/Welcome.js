import React from 'react';

class Welcome extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            planets: {}
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets/3/')
            .then(response => response.json())
            .then(data => this.setState({ planets: data }))
    }

    render() {
        const {planets} = this.state;
        console.log(planets)
        const planetsObject = Object.keys(planets).map((item, index) => (
            <div key={index}>
                <h1>{item.diameter}</h1>
            </div>
        ));
        return (
            <div className="jumbotron">
            <div className="container">
            <h1>The Star Wars Begin soon .... !!!</h1>
                <br/>
            </div>
            {planetsObject}
            </div>
        );
    }
}

export default Welcome;