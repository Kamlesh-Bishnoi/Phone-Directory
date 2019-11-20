import React from 'react'
import AddSubscriber from './component/AddSubscriber'
import App from './App.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class PhoneDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'aman',
                mobileNo: 9785001122
            },
            {
                id: 2,
                name: 'vasu',
                mobileNo: 9785001122
            }

            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });

    }
    deleteSubscriberhandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id == subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({ subscribers: newSubscribers });
    }

    render() {
        return (
            <Router>
                <Route exact path='/' render={(props) => <App {...props} subscribersList={this.state.subscribersList} deleteSubscriberhandler={this.deleteSubscriberhandler} />} />
                <Route exact path='/add' render={({ history }, props) => <AddSubscriber history={history}{...props} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Router>
        )
    }
}
export default PhoneDirectory