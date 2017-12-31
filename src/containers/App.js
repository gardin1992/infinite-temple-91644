import React, {Component} from 'react'
import * as drawerMDC from '@material/drawer/dist/mdc.drawer'
import {Route} from 'react-router'
//
import {BarFooter, BarHeader, BarAside} from '../components/app/index';
//
import Home from './Home';
import DataScience from './DataSciente';

class App extends Component {

    render() {

        return (
            <div style={{minWidth: "320px"}}>

                <BarHeader />

                <BarAside />

                <main className="demo-main mdc-toolbar-fixed-adjust">
                    <h1 className="mdc-typography--display1">Gardin1992</h1>
                    <p className="mdc-typography--body1">Click the menu icon above to open.</p>
                    <h2 className="mdc-typography--display2">List Groups</h2>

                    <div className="mdc-layout-grid" style={{width: "90%", margin: "0 auto"}}>

                            <Route exact path="/" component={Home}/>
                            <Route exact path="/data-science" component={DataScience}/>
                            {/*<Route exact path="/" component={Home}/>*/}
                            {/*<Route exact path="/" component={Home}/>*/}

                    </div>

                    <section>

                    </section>

                </main>

                <BarFooter />

            </div>
        )

    }

    componentDidMount() {

        const drawerEl = document.querySelector('.mdc-temporary-drawer');
        const drawer = new drawerMDC.MDCTemporaryDrawer(drawerEl);

        document.querySelector('.demo-menu').addEventListener('click', function () {
            drawer.open = true;
        });

        drawerEl.addEventListener('MDCTemporaryDrawer:open', function () {
            console.log('Received MDCTemporaryDrawer:open');
        });

        drawerEl.addEventListener('MDCTemporaryDrawer:close', function () {
            console.log('Received MDCTemporaryDrawer:close');
        });

    }

}

/**
 *
 <section className="mdc-layout-grid__cell">
 <h3>Basic Usage</h3>

 <ContentListGroup listGroups={Object.values(listGroups)}/>

 </section>

 <section className="mdc-layout-grid__cell">
 <h3>Basic Usage</h3>

 <ContentListGroup listGroups={Object.values(listGroups)}/>

 </section>
 */

export default App;

