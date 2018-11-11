import React, { Component} from 'react';
import {connect} from 'react-redux';

import { Link } from 'react-router-dom';
class Post extends Component{
    render(){
        return(
            <div>                
            <p><label>Company Name :</label>{this.props.post.firstname}</p>
            <p><label>Address :</label>{this.props.post.address}</p>
            <p><label>Revenue :</label>{this.props.post.revenue}</p>
            <p><label>Phone Number :</label>{this.props.post.number}</p>
            <button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>X</button>
             <Link to={`/offices/${this.props.post.id}`}>test</Link>            
            </div>
        );
    }
}
export default connect()(Post);