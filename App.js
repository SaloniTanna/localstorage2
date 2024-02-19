import React from "react";

class App extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = { };
  }
  componentDidMount()
  {
    this.getData();
  }
  saveData()
  {
    localStorage.setItem("name","Saloni Tanna")
    localStorage.setItem("gender","  Female")
    this.setState({msg:"Value Stored"})
  }
  getData()
  {
    var a = localStorage.getItem("name");
    var b = localStorage.getItem("gender")
    if(a && b)
    {
      this.setState({msg:"Value is: "+a +b})

    }
    else
    {
      this.setState({msg:"Value Not Present"})
    }
  }
  removeData()
  {
    localStorage.clear();
    this.setState({msg:"Value Removed"})
  }
  render()
  {
     return(
      <>
      {this.state.msg}<br />
      <input type="button" onClick={this.saveData.bind(this)} value="Save" />
      <input type="button" onClick={this.getData.bind(this)} value="Get" />
      <input type="button" onClick={this.removeData.bind(this)} value="Remove" />

      </>
    );
  }
}

export default App;
