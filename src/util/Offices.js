import React, { Component} from 'react';
import {connect} from 'react-redux';

class Offices extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-body">              
                <h1>{this.props.office.name}</h1>
                <p><label>location :</label></p>
                <p> <label>lat  -</label>{this.props.office.locationlat}</p>
                <p> <label>lon  -</label>{this.props.office.locationlon}</p>
                <p><label>Start date :</label></p>
                <p>{this.props.office.officedate}</p>
                <button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.office.id})}>X</button>            
                </div>
            </div>
        );
    }
}
export default connect()(Offices);