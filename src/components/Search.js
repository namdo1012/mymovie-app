import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			s: "", //user input's string
			results: [], // response results
			selected: {} // data need to popup
		}

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput = e => {
		this.props.onInputChange(e.target.value);
	};

	handleSearch = (e) => {
		let apiUrl = this.props.apiUrl;
		let query = `${apiUrl}&s=${this.props.s}`;
		if (e.key === "Enter") {
			axios(query)
			.then(({data}) => {
				console.log(data);
				let results = data.Search;
				console.log(results);
				this.props.onSearch(results);
				this.setState( {results} ); //results : results
			})
			.catch(err => {
				alert(err);
			});
		}
	}

	render() {
		return (
			<Fragment>
				<section className="searchbox-section">
					<input 	className = "searchbox" 
							type = "text" 
							placeholder = "Search for a movie..."
							onChange = {this.handleInput}
							onKeyPress = {this.handleSearch}
					/>
				</section>
			</Fragment>
		)
	}
}

export default Search;