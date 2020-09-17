import React, { Component } from "react";
import "./tourList.scss";
import Tour from "../Tour";
import { tourData } from "../tourData";
class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTours = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    this.setState({
      tours: filteredTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist pt-3">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTours={this.removeTours} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
