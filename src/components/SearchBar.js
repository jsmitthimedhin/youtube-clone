import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Video Search</label>
                            <input type="text" value={this.state.term} name="name" onChange={(e) => this.setState({term: e.target.value})}
                             />
                        </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SearchBar;