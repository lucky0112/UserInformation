/**
 * Created by abhisheksinghal on 18/03/18.
 */

import React from 'react';
import _ from 'lodash';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const sideBarStyle = {
    marginTop: '75px'
};
export default class SideBar extends React.Component {

    render() {
        const albumList = _.map(this.props.albums,(value,key) => {
            return(
                <MenuItem onClick={() => this.props.albumClick(value.id)} key={key}>{value.title}</MenuItem>
            )
        });
        return (
            <div >
                <Drawer containerStyle={sideBarStyle}>
                    {albumList}
                </Drawer>
            </div>
        );
    }
}