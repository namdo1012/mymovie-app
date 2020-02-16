import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {

    render() {
        const {results} = this.props;
        return (
            <section className="results-section">
                <div class="container">
                    <div className="card-columns">
                        {results.map(result => (
                            <Result key={result.imdbID} result={result}></Result>
                        ))}
                    </div>
                </div>


            </section>            
        )
    }
}

export default Results;