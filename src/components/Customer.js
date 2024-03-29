import React from 'react';




class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name ={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <h2><img src={this.props.image} alt='profileimage'></img>
                {this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday} &emsp;
                {this.props.gender}  &emsp;
                {this.props.job}</p>
                <hr/>
                
            </div>
        );
    }
}


export default Customer;

