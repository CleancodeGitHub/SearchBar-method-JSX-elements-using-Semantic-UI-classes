import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value)
    }
    render() {
        return (
            <div className="ui segment">
                <div className="field">
                    <form className="ui form">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;