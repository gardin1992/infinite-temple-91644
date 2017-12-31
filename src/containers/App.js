import React, {Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class App extends Component {

    render() {

        const {app, actions} = this.props;

        console.log(this.props);

        return (
            <div>

                <input hidden={app.blog ? "true" : "false"} role="search" type="text" placeholder="Procurar no Blog" />
                <input type="button" value={"Ativar blog"} onClick={actions.post}/>

                <h1>{this.props.title}</h1>

                <p>PARAGRAFO PARA TESTE</p>

            </div>);

    }

}

// const connectOptions = {
//     doSubscribePropsSelector: props => props.nodeId,
//     doSubscribe: (store,nodeId) => store.subscribeNode(nodeId)
// };

const mapStateToProps = (state, ownProps) => ({
    app: state.app
});

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({post: () => { return {type: "REQUEST_POSTS"}}}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);