/**
 * Created by abhisheksinghal on 18/03/18.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const styles = {
    title: {
        cursor: 'pointer',
    },
};


class TopBar extends React.Component{
    render(){
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