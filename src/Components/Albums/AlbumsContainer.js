/**
 * Created by abhisheksinghal on 18/03/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './AlbumSideBar';
import TopBar from '../TopBar';
import { fetchUserAlbums } from '../../Actions';
import { fetchPhotos } from '../../Actions';
import GridListExampleSimple from './AlbumContent';


class AlbumsContainer extends Component{

    constructor(props){
        super(props);
        this.handleAlbumClick = this.handleAlbumClick.bind(this);
        this.state ={
            albumId : 0,
            photoData:{}
        }
    }

    componentDidMount() {
        this.props.fetchUserAlbums(this.props.match.params.id)
    }

    async handleAlbumClick(albumId){
        await this.props.fetchPhotos(albumId);
        this.setState({albumId});
        this.setState({photoData:this.props.photos})
    }

    render(){
        console.log("AlbumContainer Props");
        console.log(this.props);
        return(
            <div>
                <SideBar albums = {this.props.userAlbum} albumClick = {this.handleAlbumClick}/>
                {this.state.albumId ?  <GridListExampleSimple albumData = {this.state.photoData}/> : <div className="select-album"> Select Album </div> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        userAlbum: state.UserAlbumReducer.data,
        photos: state.AlbumPhotosReducer.data
    }
}




export default connect(mapStateToProps,{fetchUserAlbums,fetchPhotos})(AlbumsContainer);