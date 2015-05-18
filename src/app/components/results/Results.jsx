import React, { PropTypes } from "react";
import { List } from "immutable";
import Result from "components/result/Result";

export default class Results extends React.Component {

    static propTypes = {
        results: PropTypes.instanceOf(List).isRequired
    }

    render() {
        return (
            <section>
                <h3>Results</h3>

                <ul>
                    {this.props.results.map(result =>
                        <li>
                            <Result name={result.get("name")}
                                    authorName={result.getIn(["owner", "login"])}
                                    url={result.get("url")} />
                        </li>
                    )}
                </ul>
            </section>
        );
    }

}
