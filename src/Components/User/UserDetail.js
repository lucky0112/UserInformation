/**
 * Created by abhisheksinghal on 15/03/18.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import userPic from './Images/user.jpg'

class UserDetail extends Component{
    render(){
        const { user } = this.props;
        return(
            <Paper style={{
                height: 600,
                width: 700,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block',
            }} zDepth={5}>
                <div className="user-heading"> User Information</div>
                <hr />
                <div className="user-detail">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <img className="user-image" src={userPic} alt="logo" />
                </div>

            </Paper>
        )
    }
}



export default UserDetail;