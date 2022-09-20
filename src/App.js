// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Cardlist from './Cardlist';
//import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry';
import Searchbox from './Searchbox';

   class App extends Component {
    constructor(){
        super()
    this.state = {
        robots: [],//robots ,
        searchfield: ''
     } 
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
        return response.json()})
        .then(users=>
            this.setState({robots: users})  
        )
    }
    onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    }
    render(){
      const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      if(this.state.robots.length === 0){
        return <h1 className='tc'>Loading....</h1>
      }else{
    return(
        <div className='tc'>
            <h1 className='h1'>Robofriends</h1>
            <Searchbox searchChange={this.onSearchChange} />
         <div className='dev'>
            <ErrorBoundry>
            <Cardlist robots = {filterRobots} />
            </ErrorBoundry>
         </div>
        </div>
         )}
    }
}

export default App;