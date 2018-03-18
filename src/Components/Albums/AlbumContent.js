import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import _ from 'lodash';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 560,
        height: 700,
        overflowY: 'auto',
    },
};


class GridListExampleSimple extends React.Component{

    render(){
        const {albumData} = this.props;
        console.log(this.props);
        return(
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    <Subheader>Select Album to view Pictures</Subheader>
                    {_.map(albumData,(tile) => (
                        <GridTile
                            key={tile.title}
                            title={tile.title}
                            subtitle={<a href={tile.url}>URL: {tile.url}</a>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={tile.thumbnailUrl} alt={tile.title}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}


export default GridListExampleSimple;