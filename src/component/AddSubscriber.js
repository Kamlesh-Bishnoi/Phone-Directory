import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
class AddSubscriber extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            mobileNo: ''
        }

    }
    InputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
      


    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', mobileNo: '' });

        this.props.history.push('/');
    }
    render() {
        const { name, mobileNo } = this.state;
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/"> <button type="button" className="btn btn-secondary backButton">Back</button></Link>
                        </div>
                    </div>
                    <form onSubmit={this.onFormSubmitted.bind(this)}>
                        <div className="row">

                            <div className="col-md-6">
                                <label className="labelField">Name:-</label>
                                <input type="text" placeholder="Your Name" className="inputField" name='name' onChange={this.InputChangeHandler} required></input>
                            </div>
                            <div className="col-md-6">
                                <label className="labelField">Mobile No:-</label>
                                <input type="number" placeholder="Your Mobile No" className="inputField" name='mobileNo' onChange={this.InputChangeHandler} required></input>
                            </div></div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="subscriber">Subscriber To Be Added:-</h4>
                                <span className="addField">Name:{name}</span><br />
                                <span>Mobile No:{mobileNo}</span><br />
                                <button className="btn btn-success addButton" type="submit">ADD</button></div>
                        </div>
                    </form>
                </div>


            </div >
        )
    }
}
export default AddSubscriber