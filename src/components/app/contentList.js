// import React, {Component} from 'react';
//
// const contentListGroup = ({listGroups = []}) => (
//
//     <div className="mdc-list-group">
//
//     </div>
// );
//
// const ContentList = ({listItems = []}) => (
//     <div>
//         <h3 className="mdc-list-group__subheader">List 1</h3>
//         <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--icon-placeholders">
//
//         </ul>
//     </div>
// );
//
// const ContentListItem = ({item, key}) => (
//
//     <li className="mdc-list-item">
//                   <span className="mdc-list-item__start-detail" role="presentation">
//                     <i className="material-icons" aria-hidden="true">insert_drive_file</i>
//                   </span>
//         <span className="mdc-list-item__text">
//                     Vacation Itinerary
//                     <span className="mdc-list-item__secondary-text">Jan 10, 2014</span>
//                   </span>
//         <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information"
//            title="More info" onClick={(event) => {
//             event.preventDefault();
//         }}>
//             info
//         </a>
//     </li>
//
// );
//
// import React from 'react'
//
// export const NavFooter = (props) => {
//
//     const {listItems = []} = props;
//
//     return (
//
//         <menu className="NavFooter">
//             {  listItems.map((item, key) => {
//
//                 return (
//                     <div key={key}>
//                         Hello motor
//                     </div>
//                 );
//
//             }) }
//         </menu>
//     )
// };
//
//
// export const NavItemFooter = ({item = {}, key}) => {
//
//     return (
//         <menuitem key={key}>
//
//             <a onClick={function (e) {
//                 e.preventDefault()
//             }}>
//                 {item.name}
//             </a>
//
//         </menuitem>
//     )
// };
//
//
// export const BarAside = () => ;
//
// export const listGroups = {
//     listHome: {
//         home: {
//             name: 'home',
//             component: 'home',
//             action: 'getPage',
//             event: 'onClick',
//             subscribe: 'onChangeFooter'
//         },
//         news: {
//             name: 'news',
//             component: 'news',
//             action: 'getPage',
//             event: 'onClick',
//             subscribe: 'onChangeFooter'
//         },
//         repository: {
//             name: 'repository',
//             component: 'repository',
//             action: 'getPage',
//             event: 'onClick',
//             subscribe: 'onChangeFooter'
//         },
//         help: {
//             name: 'help',
//             component: 'help',
//             action: 'getPage',
//             event: 'onClick',
//             subscribe: 'onChangeFooter'
//         }
//     }
// };
//
// export const ContentListGroup = ({listGroups = []}) => (
//
//     <div className="mdc-list-group">
//
//         {listGroups.map((item, key) => (
//
//             <ContentList key={key} listItems={item}/>
//         ))}
//     </div>
// );
//
//
// let counter = 1;
//
// export const ContentList = ({listItems = []}) => (
//     <div>
//         <h3 className="mdc-list-group__subheader">List {counter++}</h3>
//         <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list demo-list demo-list--with-avatars demo-list--icon-placeholders">
//
//             {Object.values(listItems).map((item, key) => (
//
//                 <ContentListItem key={key} item={item}/>
//             ))}
//
//         </ul>
//     </div>
// );
//
// export const ContentListItem = ({item, key}) => (
//
//     <li className="mdc-list-item">
//                   <span className="mdc-list-item__start-detail" role="presentation">
//                     <i className="material-icons" aria-hidden="true">insert_drive_file</i>
//                   </span>
//         <span className="mdc-list-item__text">
//             {item.name}
//             <span className="mdc-list-item__secondary-text">Jan 10, 2014</span>
//                   </span>
//         <a href="#" className="mdc-list-item__end-detail material-icons" aria-label="View more information"
//            title="More info" onClick={(event) => {
//             event.preventDefault();
//         }}>
//             info
//         </a>
//     </li>
//
// );
//
// export const ContentApp = ({title}) => (
//
//     <div>
//
//     </div>
//
// );
