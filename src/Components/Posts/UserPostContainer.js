import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser,fetchPosts } from '../../Actions';
import PostSelector from '../../selectors/selected_posts';

class UserPostContainer extends Component{

    componentWillMount(){
        this.props.fetchUser(this.props.match.params.id)
    }

    componentDidMount(){
        if (this.props.selectedUser.indexOf(this.props.match.params.id)<0){
            this.props.fetchPosts(this.props.match.params.id)
        }

    }

    render(){
        return(
            <div className="post-header">
                <h1>Welcome {this.props.user && this.props.user.name} Posts</h1>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUser:fetchUser,
        fetchPosts:fetchPosts
    },dispatch)
}

function mapStateToProps(state,ownProps) {
    return{
        user: state.UserReducer.data[ownProps.match.params.id],
        posts: PostSelector(state),
        selectedUser: state.userPosts.userSelected
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserPostContainer);
