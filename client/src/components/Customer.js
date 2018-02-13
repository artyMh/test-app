import React from 'react';
import PropTypes from 'prop-types';

export default class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customerSelected: ''};
        this.chooseUser = this.chooseUser.bind(this);
    }

    chooseUser(e) {
        this.setState({ customerSelected: e.currentTarget.value});
        this.props.removeAllProducts(); // Clear basket because per user is unique products set which not accesable to other users from different locations
        this.props.getUser(e.currentTarget.value);
    }

    render() {
        const { customerSelected } = this.state;

        return (
            <div>
                <div className="page-header">
                    <h2>Choose customer</h2>
                </div>
                <div className="radio">
                    <label><input type="radio" 
                                name="user" 
                                defaultValue="london" 
                                checked={customerSelected === 'london'}
                                onChange={this.chooseUser}/>London</label>
                </div>
                <div className="radio">
                    <label><input type="radio" 
                                name="user" 
                                defaultValue="liverpool" 
                                checked={customerSelected === 'liverpool'}
                                onChange={this.chooseUser}/>Liverpool</label>
                </div>
            </div>
        );
    }
}

Customer.propTypes = {
    removeAllProducts: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
};
