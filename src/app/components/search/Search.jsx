import React, { PropTypes } from "react";
import emptyFunction from "react/lib/emptyFunction";

export default class Search extends React.Component {

    static propTypes = {
        onSearch: PropTypes.func
    }

    static defaultProps = {
        onSearch: emptyFunction
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    ref={component => this.term = component}
                    type="text" />
                <button type="submit">Search</button>
            </form>
        );
    }

    onFormSubmit(evt) {
        evt.preventDefault();
        this.props.onSearch(React.findDOMNode(this.term).value);
    }

}
