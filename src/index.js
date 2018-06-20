import React from "react";
import ReactDOM from "react-dom";
import {GetPeople , Pagination, UserList} from './components';

import "./styles.css";

const Loader = <div className="loader" />;
const API = "https://reqres.in/api/users?page=";

class PeopleList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      currentPage: 1,
      totalPages: 1
    };
  }
  
  goToPage(newPage) {
    if (!isNaN(newPage) && (function (x) { return (x | 0) === x; })(parseFloat(newPage))) {
      if (newPage >= 1 && newPage <= this.state.totalPages) {
        this.setState({
          currentPage: newPage
        }, function () {
          this.fetchData();
        });
      } else {
        alert('Page Out Of Range');
      }
    } else {
      if (newPage == "") {
        this.setState({
          currentPage: newPage
        });
      } else {
        alert('Entered number is invalid');
      }
    }
  }

  fetchData() {
    this.setState({
      isFetching: true
    });
    fetch(API + this.state.currentPage)
      .then(response => response.json())
      .then(data => this.setState({ users: data.data, isFetching: false, totalPages: data.total_pages }))
      .catch(error => (alert(error)));      
  }
  
  render() {
    return (
      <div>
        {this.state.isFetching ? Loader : ""}
        {this.state.users.length > 0 ? (
          <div>
            <UserList isFetching={this.state.isFetching} users={this.state.users} />
            <Pagination currentPage={this.state.currentPage} totalPages={this.state.totalPages} goToPage={(newPage) => this.goToPage(newPage)} />
          </div>
        ) : (
            <GetPeople fetchData={() => this.fetchData()} />
          )}
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<PeopleList />, rootElement);
