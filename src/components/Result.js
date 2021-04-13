import React, { Component } from "react";

class Result extends Component {
  render() {
    const { result } = this.props;
    return (
      // <div className="result-box">
      //     <img className="result-box__poster" src={result.Poster} alt=""/>
      //     <h3 className="result-box__title">{result.Title}</h3>
      // </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={result.Poster}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{result.Title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <a href="#" className="btn btn-primary">
            Go some
          </a>
        </div>
      </div>
    );
  }
}

export default Result;
