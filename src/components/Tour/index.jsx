import React, { Component } from "react";
import "./tour.scss";
class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTours } = this.props;
    return (
      <div className="">
        <article className="tour">
          <div className="imageWrapper">
            <img src={img} className="img-fluid" alt="" />
            <span
              className="close-btn"
              onClick={() => {
                removeTours(id);
              }}
            >
              &times;
            </span>
          </div>
          <div className="tourInfo">
            <h3>{city}</h3>
            <h4>{name}</h4>
            <h5>
              info
              <span onClick={this.handleInfo}>drop</span>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
          </div>
        </article>
      </div>
    );
  }
}

export default Tour;
