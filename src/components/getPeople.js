import React from 'react'

class GetPeople extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()} className="btn btn--primary">
          Get People
        </button>
      </div>
    );
  }
}

export default GetPeople