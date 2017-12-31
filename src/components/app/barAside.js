import React, {Component} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class BarAside extends Component {

    render() {

        // const {handlerOnClick} = this.props;

        return (
            <aside className="mdc-temporary-drawer">
                <nav className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div
                            className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                            Header here
                        </div>
                    </header>

                </nav>
            </aside>

        );

    }

}


const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        handlerOnClick: url => () => dispatch(push(url))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(BarAside)