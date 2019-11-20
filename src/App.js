import React from 'react';
import Header from './component/Header'
import { Link } from 'react-router-dom'
import './App.css';


class App extends React.Component {
  onDeletehandler = (subscriberId) => {
    this.props.deleteSubscriberhandler(subscriberId);
  }
  render() {

    return (
      <div className="App">
        <Header heading="Phone Directory" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Link to='/add'> <button className="btn btn-success addButton" type="button">ADD</button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
            <p className="name">NAME:</p>
            </div>
            <div className="col-md-5">
            <p className="name">Mobile No:-</p>
            </div>
          </div>
          {
            this.props.subscribersList.map(sub => {
          return  <div className="row" key={sub.id}>
           
            <div className="col-md-5">
            
            <span className="name">{sub.name}</span>
            </div>
              <div className="col-md-5">
              <span className="mobile">{sub.mobileNo}</span>
                </div>
                <div className="col-md-2">
                <button type="button" className=" btn btn-warning deleteButton " onClick={this.onDeletehandler.bind(this, sub.id)}>DELETE</button>
                  </div>
          </div> })}
         
      </div></div>
    );
  }
}

export default App;
