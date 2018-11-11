import React, {Component} from 'react';
import {connect} from 'react-redux';

class CompanyForm extends Component{
    handleSubmit =(event)=>{
        event.preventDefault();
        const firstname = this.getFirstName.value;
        const address = this.getAddress.value;
        const revenue = this.getRevenue.value;
        const number = this.getCode.value.concat(this.getNumber.value);
        const data ={
            id: new Date(),firstname,address,revenue,number
        }
        console.log(data);
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getFirstName.value = '';
        this.getAddress.value = '';
        this.getRevenue.value = '';
        this.getCode.value = '';
        this.getNumber.value = '';
    }
    render(){
        return(
                <div className="card"> 
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <div>
                            <input required name="firstName"  type="text" ref={(input)=>this.getFirstName = input} placeholder="name"/>
                        </div>
                    </div>
                    <div>
                        <label>Address</label>
                        <div>
                            <input required name="address" component="input" type="text" ref={(input)=>this.getAddress = input} placeholder="address"/>
                        </div>
                    </div>
                    <div>
                        <label>Revenue</label>
                        <div>
                            <input required name="revenue" component="input" type="text" ref={(input)=>this.getRevenue = input} placeholder="revenue"/>
                        </div>
                    </div>
                    <div>
                        <label>Phone No:</label>
                        <div>
                            <input required name="code"  cols="5" component="input" type="text" ref={(input)=>this.getCode = input} placeholder="code"/>
                            <input required name="number" component="input" type="text" ref={(input)=>this.getNumber = input} placeholder="number"/>
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
export default connect() (CompanyForm);