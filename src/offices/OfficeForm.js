import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-date-picker';
import moment from 'moment';
class OfficeForm extends Component{
    constructor(props) {
      super(props);
      this.state = {
          comp :'',
          date :new Date(),
      };
      this.handleChangeDate = this.handleChangeDate.bind(this);
      this.handleChangeComp = this.handleChangeComp.bind(this);
    
    }
    handleSubmitForm=(event)=>{
        event.preventDefault();
        const name = this.getName.value;
        const locationlat = this.getLocationLat.value;
        const locationlon = this.getLocationLon.value;
        const officedate =  moment(this.state.date).format('DD-MMMM-YYYY');
        const company = this.state.comp;
         const data ={
            id:new Date() ,name,company,locationlat,locationlon,officedate,
        }
        console.log(data);
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getName.value = '';
        this.getLocationLat.value ='';
        this.getLocationLon.value ='';
    }
    handleChangeDate(event) {
       this.setState({ date: event });
              
    }
    handleChangeComp(event) {
      this.setState({ comp: event.target.value });
       
    }
    
    render(){
        return(
                <div> 
                    <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Name</label>
                        <div>
                            <input required name="name"  type="text" ref={(input)=>this.getName = input} placeholder="name"/>
                        </div>
                    </div>
                    <div>
                        <label>Location</label>
                        <div>
                            <input required name="locationlat" component="input" type="text" ref={(input)=>this.getLocationLat = input} placeholder="lat"/>
                            <input required name="locationlon" component="input" type="text" ref={(input)=>this.getLocationLon = input} placeholder="lon"/>
                       </div>
                    </div>
                    <div>
                        <label>Office Start Date</label>
                        <div>
                            <DatePicker  selected={this.state.date} value={this.state.date} onChange={this.handleChangeDate}/>
                        </div>
                    </div>
                    <div>
                        <label>Company</label>
                        <div>
                             <select value={this.state.comp} onSelect={this.state.comp} onChange={this.handleChangeComp} >
                                {this.props.posts.map((post) =>
                                <option  key={post.id} value={post.id}>{post.firstname}</option>)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                    </form>
                </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        posts: state
    }
}
export default connect(mapStateToProps) (OfficeForm);