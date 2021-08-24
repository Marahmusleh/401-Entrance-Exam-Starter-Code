import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiData from './ApiData';

class Home extends React.Component {
   
  constructor(props){
    super(props);
    this.state={
      apiData : [],
      showapiData:false
    }
  }

  componentDidMount = async () =>{
  const req = await axios.get(`${process.env.REACT_APP_SERVER}/flowers`);
    this.setState({
    apiData:req.data,
    showapiData:true
    })
  }

  addToFav = async (idx) =>{
    const req = await axios.post(`${process.env.REACT_APP_SERVER}/flowers/favorite`,idx);
    console.log(req.data)
  }


  render() {
    return (
      <div>
        {this.state.showapiData &&
        <ApiData
        apiData={this.state.apiData}
        addToFav={this.addToFav}
        />
  }
      </div>
    )
  }
}

export default Home;
