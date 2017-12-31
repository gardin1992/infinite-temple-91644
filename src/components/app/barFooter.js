import React, {Component} from 'react'
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class BarFooter extends Component {

    render() {

        const {handlerOnClick} = this.props;

        return (
            <footer className="App-BarFooter" style={{overflowX: "auto", overflowY: "hidden"}}>

                {/*style="--mdc-ripple-fg-size:96px; --mdc-ripple-fg-scale:1.84422;"*/}
                {/*style="--mdc-ripple-fg-size:96px; --mdc-ripple-fg-scale:1.84422;"*/}
                {/*style="--mdc-ripple-fg-size:96px; --mdc-ripple-fg-scale:1.84422;"*/}
                {/*style="transform: translateX(0px) scale(0.333333, 1); visibility: visible;"*/}

                <nav id="primary-indicator-tab-bar"
                     className="mdc-tab-bar mdc-tab-bar--indicator-primary mdc-tab-bar-upgraded">


                    <a className="mdc-tab mdc-tab--active mdc-ripple-upgraded" title="Home"
                       onClick={handlerOnClick('/')}
                    >

                        <i className="material-icons mdc-tab__icon" >home</i>
                    </a>


                    <a className="mdc-tab mdc-tab--active mdc-ripple-upgraded" title="Data Science"
                       onClick={handlerOnClick('/data-science')}
                    >Data Sience</a>


                    <a className="mdc-tab mdc-ripple-upgraded" title="Functional Programming"
                       onClick={handlerOnClick('/functional-programming')}
                    >Functional Programming</a>

                    <a className="mdc-tab mdc-ripple-upgraded" title="Functional Programming"
                       onClick={handlerOnClick('/progressive-web')}
                    >Progressive Web</a>

                    <span className="mdc-tab-bar__indicator"
                    />
                </nav>

            </footer>
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


export default connect(mapStateToProps, mapDispatchToProps)(BarFooter)