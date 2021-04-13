import React, { Component } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: "", //user input's string
      results: [], // response results
      selected: {}, // data need to popup
    };
  }

  handleInputChange = (val) => {
    this.setState({ s: val });
  };

  handleSearch = (results) => {
    this.setState({ results });
  };

  render() {
    const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=2911792a";
    const { s, results, selected } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <main>
          <Search
            apiUrl={apiUrl}
            s={s}
            onInputChange={this.handleInputChange}
            onSearch={this.handleSearch}
          />
          <Results results={results} />
        </main>
      </div>
    );
  }
}

export default App;
