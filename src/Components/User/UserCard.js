import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    return(
        <div className="user-card">
            <Card style={{cursor:'pointer'}} onClick={()=>props.onUserClick(props.value.id)}>
                <CardHeader
                    title={props.value.name}
                    subtitle={props.value.email}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardActions>
                    <FlatButton label="User Albums" containerElement={<Link to={`/albums/${props.value.id}`}/>} secondary={true}/>
                    <FlatButton label="User Posts" secondary={true} containerElement={<Link to={`/userPost/${props.value.id}`}/>}/>

                </CardActions>
                <CardText expandable={true}>
                    <li>Company Name : {props.value.company.name}</li>
                    <li>Phone : {props.value.phone}</li>
                    <li>Website : {props.value.website}</li>
                </CardText>
            </Card>
        </div>
    )
};

export default UserCard;