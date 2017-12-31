import React from 'react'

import BarHeader from './barHeader';
import BarFooter from './barFooter';
import BarAside from './barAside';

export {
    BarHeader,
    BarFooter,
    BarAside
}

export const ContentListGroup = ({listGroups = []}) => (

    <div className="mdc-list-group">

        {listGroups.map((item, key) => (

            <ContentList key={key} listItems={item}/>
        ))}
    </div>
);


let counter = 1;

export const ContentList = ({listItems = []}) => (
    <div>
        <h3 className="mdc-list-group__subheader">List {counter++}</h3>
        <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--icon-placeholders">

            {Object.values(listItems).map((item, key) => (

                <ContentListItem key={key} item={item}/>
            ))}

        </ul>
    </div>
);

export const ContentListItem = ({item, key}) => (

    <li className="mdc-list-item">
                  <span className="mdc-list-item__start-detail" role="presentation">
                    <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                  </span>
        <span className="mdc-list-item__text">
            {item.name}
            <span className="mdc-list-item__secondary-text">Jan 10, 2014</span>
                  </span>
        <a href="#s" className="mdc-list-item__end-detail material-icons" aria-label="View more information"
           title="More info" onClick={(event) => {
            event.preventDefault();
        }}>
            info
        </a>
    </li>

);