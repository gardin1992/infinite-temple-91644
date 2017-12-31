import React, {Component} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class BarHeader extends Component {

    render() {

        // const {handlerOnClick} = this.props;

        return (

            <div className="mdc-toolbar mdc-toolbar--fixed">
                <div className="mdc-toolbar__row">
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span>
            <a href="/" className="mdc-toolbar__menu-icon"><i className="material-icons"></i></a>
          </span>
                        <button className="demo-menu material-icons mdc-toolbar__menu-icon">menu</button>
                        <span className="mdc-toolbar__title catalog-title">GARDIN1992.github.io</span>
                    </section>

                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                        <span className="mdc-toolbar__title catalog-title">Hacking Repository</span>
                    </section>

                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                        <span className="mdc-toolbar__title catalog-title">Search</span>
                        <span className="mdc-toolbar__title catalog-title">Search</span>

                    </section>

                </div>
            </div>

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


export default connect(mapStateToProps, mapDispatchToProps)(BarHeader)