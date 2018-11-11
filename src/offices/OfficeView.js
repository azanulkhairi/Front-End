import React, {Component} from 'react'
import { connect } from 'react-redux';

import Offices from '../util/Offices'
class OfficesView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <div>
                {/* <p><label>Company Name :</label>{this.props.post.firstname}</p> */}
                {/* <p><label>Address :</label>{this.props.post.address}</p>
                <p><label>Revenue :</label>{this.props.post.revenue}</p>
                <p><label>Phone Number :</label>{this.props.post.number}</p>
                <button>Back to Overview</button> */}
                <div class="card"> 
                <h1>Offices</h1>                
                 {this.props.offices.map((office) => <Offices key={office.id} office={office} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        offices:state //state.filter((offices)=>offices.id !== match.params.id)        
    }
}

export default connect(mapStateToProps) (OfficesView);
