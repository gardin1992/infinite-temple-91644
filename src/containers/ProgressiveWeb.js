import React, {Component} from 'react'

import {ContentListGroup} from '../components/app/index';

const listGroups = {
    listHome: {
        home: {
            name: 'home',
            component: 'home',
            action: 'getPage',
            event: 'onClick',
            subscribe: 'onChangeFooter'
        },
        news: {
            name: 'news',
            component: 'news',
            action: 'getPage',
            event: 'onClick',
            subscribe: 'onChangeFooter'
        },
        repository: {
            name: 'repository',
            component: 'repository',
            action: 'getPage',
            event: 'onClick',
            subscribe: 'onChangeFooter'
        },
        help: {
            name: 'help',
            component: 'help',
            action: 'getPage',
            event: 'onClick',
            subscribe: 'onChangeFooter'
        }
    }
};

class DataSciente extends Component {

    render() {

        return (
            <div>

                <h2>Data Sciente</h2>

                <section className="mdc-layout-grid__cell">
                    <h3>Basic Usage</h3>

                    <ContentListGroup listGroups={Object.values(listGroups)}/>

                </section>

                <section className="mdc-layout-grid__cell">
                    <h3>Basic Usage</h3>

                    <ContentListGroup listGroups={Object.values(listGroups)}/>

                </section>

            </div>
        )

    }

}

export default DataSciente;

