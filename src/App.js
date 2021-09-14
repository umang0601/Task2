import Users from "./Info/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2500
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h1>TripGo | Meet our Team</h1>
            
            
            <button className="fetchbtn" onClick={this.updateState}>
              Have a look
            </button>
          </div>
        </nav>
        <div className="fetchuser">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        
      </>
    );
  }
}

export default App;