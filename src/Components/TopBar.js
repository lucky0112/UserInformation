/**
 * Created by abhisheksinghal on 18/03/18.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    title: {
        cursor: 'pointer',
    },
};


class TopBar extends React.Component{
    render(){
        console.log(this.props);
        return(
            <AppBar
                title={<span style={styles.title}>Home</span>}
                onTitleClick={() => {this.props.history.push('/')}}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />
        )
    }
}

export default TopBar;