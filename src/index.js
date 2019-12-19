import React from 'react';
import ReactDOM from 'react-dom';
//class Click extends React.Component
/*{
    shoot()
    {
        alert("wow good shot");
    }
    render()
    {
        return (<button type="button" onClick={this.shoot}>ckick here</button>);
    }
}*/
/*{
    render(){
        return ( 
        <form><p>enter your name</p> 
        <input type="text"></input></form>);
    }
}*/
/*class Click extends React.Component
{
      mystyle = {
        backgroungcolor:"blue",
        color: "white",
    };
    render()
    {
        return(
        <div>
        <p style={'mystyle'}>HIIIIIII</p></div>);
    }
}
ReactDOM.render(<Click/>,document.getElementById('vinu'));*/
class Car extends React.Component {
    render() {
      return <h2>I am a Car!</h2>;
    }
  }
  
  class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </div>
      );
    }
  }
  
  ReactDOM.render(<Garage />, document.getElementById('vinu'));
  