import React from 'react'

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var imgLoadCount = 0;
    this.props.users.map(function (user) {
      var img = new Image();
      img.src = user.avatar;
      img.addEventListener('load', function () {
        imgLoadCount++;
      }, false);
    });
    return (
      <div className="userlist">
        {this.props.users &&
          this.props.users.map(function (user) {
            return (
              <div className="user" key={user.id}>
                <p>ID : {user.id}</p>
                <img
                  className="user--image"
                  src={user.avatar}
                  alt={user.first_name}
                />
                <h2>{user.first_name + " " + user.last_name}</h2>
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserList;