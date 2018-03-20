/**
 * Created by abhisheksinghal on 18/03/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './AlbumSideBar';
import { fetchPhotos, fetchCachePhoto, fetchUserAlbums} from '../../Actions';
import GridListExampleSimple from './AlbumContent';
import SelectedAlbumSelector from '../../selectors/selected_album';
import SelectedPhotoSelector from '../../selectors/selected_photos';


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
        if (this.props.albumSelected.indexOf(this.props.match.params.id)<0){
            this.props.fetchUserAlbums(this.props.match.params.id)
        }

    }

    async handleAlbumClick(albumId){
        if (this.props.photoSelected.indexOf(albumId)<0){
            await this.props.fetchPhotos(albumId);
        }
        else {
            await this.props.fetchCachePhoto(albumId);
        }
        this.setState({albumId});
        this.setState({photoData:this.props.photos})
    }

    render(){
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
        userAlbum: SelectedAlbumSelector(state),
        albumSelected: state.UserAlbumReducer.userSelected,
        photos: SelectedPhotoSelector(state),
        photoSelected: state.AlbumPhotosReducer.albumSelected
    }
}




export default connect(mapStateToProps,{fetchUserAlbums,fetchPhotos,fetchCachePhoto})(AlbumsContainer);