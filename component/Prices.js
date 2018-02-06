class Prices extends React.Component{
    state = {
        currency:'USD'
    }
    render(){
        let List;
        if(this.state.currency === 'USD'){
            List = <li className="list-group-item">
                        stock price for exchange {this.props.bpi.USD.description}:
                        <span className="badge badge-primary"> {this.props.bpi.USD.code}</span>
                        <strong>{this.props.bpi.USD.rate}</strong>
                    </li>;
        }

        if(this.state.currency === 'GBP'){
            List = <li className="list-group-item">
                        stock price for exchange {this.props.bpi.GBP.description}:
                        <span className="badge badge-primary"> {this.props.bpi.GBP.code}</span>
                        <strong>{this.props.bpi.GBP.rate}</strong>
                    </li>;
        }

        if(this.state.currency === 'EUR'){
            List = <li className="list-group-item">
                        stock price for exchange {this.props.bpi.EUR.description}:
                        <span className="badge badge-primary"> {this.props.bpi.EUR.code}</span>
                        <strong>{this.props.bpi.EUR.rate}</strong>
                    </li>;
        }

        return(

            <div>
                <ul className="list-group">
                    {/* <li className="list-group-item">
                        stock price for exchange {this.props.bpi.USD.description}:
                        <span className="badge badge-primary"> {this.props.bpi.USD.code}</span>
                        <strong>{this.props.bpi.USD.rate}</strong>
                    </li> */}
                    {List}
                </ul>
                <br/>
                <select onChange={e => this.setState({currency:e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
            </div>
        )
    }
}

export default Prices;