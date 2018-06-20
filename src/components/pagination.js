import React from 'react'

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  onPageChange(newPage) {
    this.props.goToPage(newPage);
  }

  onInputChange(e) {
    this.props.goToPage(e.target.value);
  }

  render() {
    return (
      <div className="pagination">
        <button onClick={() => this.onPageChange(this.props.currentPage - 1)} className={"btn btn--primary btn--arrow" + (this.props.currentPage == 1 ? " disabled" : "")}>{'<'}</button>
        <input onChange={(e => this.onInputChange(e))} type="text" className="pageinput" value={this.props.currentPage} placeholder="Current Page Number" />
        <button onClick={() => this.onPageChange(this.props.currentPage + 1)} className={"btn btn--primary btn--arrow" + (this.props.currentPage == this.props.totalPages ? " disabled" : "")}>{'>'}</button>
      </div>
    )
  }
}

export default Pagination;