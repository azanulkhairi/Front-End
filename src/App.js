import React, { Component } from 'react';
import CompanyForm from './company/CompanyForm';
import CompanyView from './company/CompanyView';
import OfficeForm from './offices/OfficeForm';
import OfficesView from './offices/OfficeView';
import { Route, Link } from 'react-router-dom';
import Office from './util/Offices'
import './app.scss';

const Form =()=>{
  return (
      <div className="shadow-none p-3 mb-5 bg-light rounded"> 
      <div className="row">
        <div className="col-sm-3 col-md-6 col-lg-4">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">      
            <CompanyForm/>
             <CompanyView/>  
            </div>
        </div>
        <div className="col-sm-3 col-md-6 col-lg-4">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">     
          <OfficeForm/>
         </div>
        </div>
        </div>
        </div>    
    );
}

const List =({match})=>{
  console.log('match',match);
  return (
    <div>
      <OfficesView match={match}/>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}

class App extends Component {
  render(){
    return(
      <div>
        <Route exact path="/" component={Form}/>
       <Route path="/offices/:id" component={List}/> 
       {/* <Route  path='/offices/:id'  render={(props) => <List {...props} isAuthed={true} />} */}

       </div>
    );
  }
}
export default App;
