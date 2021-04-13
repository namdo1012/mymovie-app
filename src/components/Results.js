import React, { Component } from "react";
import Result from "./Result";

class Results extends Component {
  render() {
    const { results } = this.props;
    console.log("Results==>", results);
    return (
      <section className="results-section">
        <div class="container">
          <div
            className="card-columns row"
            style={{ justifyContent: "center" }}
          >
            {results ? (
              results.map((result) => (
                <Result key={result.imdbID} result={result}></Result>
              ))
            ) : (
              <div>NOT FOUND</div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Results;
