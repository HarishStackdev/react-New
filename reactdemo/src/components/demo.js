import React from 'react';
import axios from 'axios';
import data from '../data.json';

function Test() {

  return (<span>test</span>);
}



class DemoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={userData:[]};
        //super();
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    componentDidMount(){
        console.log(data);
    }

    buttonClicked() {
        this.setState({
            userData: data
        })
        
    }

    render(){
        return(
            <div className="test">
                <button onClick={this.buttonClicked}>Click</button>
                {this.state.userData.map((data)=>{
              return(
                <div>
              <ul><li>{data.id}</li>
              <li>{data.nickname}</li>
              
              </ul>
              <div>
              {data.organisations.map(org=>(
                <div><img src={org.avatar_url}/></div>       ))}
              </div>
              </div>
              )
                })
            }
            
            </div>
            
        )
    }
}

export default DemoComponent;