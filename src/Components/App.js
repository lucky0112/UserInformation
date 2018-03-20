import React, { Component } from 'react';
import  UserCard  from './User/UserCard';
import { fetchUsers } from '../Actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
import UserDetail from './User/UserDetail';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            selectedUser : 1
        };
        this.handleClickedUser = this.handleClickedUser.bind(this);
    };


    componentDidMount(){
        this.props.fetchUsers()
    };

    handleClickedUser(userId){
        this.setState({
            selectedUser:userId
        })
    };

    render() {
        return (
            <div className="user-data">
                <div className="user-list">
                    <div className="App-header">
                        <h2 className="App-title">Users List</h2>
                    </div>
                    {_.isEmpty(this.props.users) ? <CircularProgress
                        left={-20}
                        top={10}
                        status={'loading'} className="App-header" size={80} thickness={5} style={{marginTop:'10%', marginLeft: '47%'}} />
                        :
                        _.map(this.props.users,(value, key) => {
                            return (
                                <UserCard value={value} key={key} onUserClick={this.handleClickedUser}/>
                            )
                        },this)}
                </div>
                <div className="user-details">
                    <div className="App-header">
                        <h2 className="App-title">Users Details(click on user to view details)</h2>
                    </div>
                    {_.isEmpty(this.props.users) ? <CircularProgress
                        left={-20}
                        top={10}
                        status={'loading'} className="App-header" size={80} thickness={5} style={{marginTop:'10%', marginLeft: '47%'}} /> :
                    <UserDetail user={this.props.users[this.state.selectedUser]}/>
                    }
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { users:state.UserReducer.data }
}

export default connect(mapStateToProps,{fetchUsers})(App);
