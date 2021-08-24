import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavCards from './FavCards';



class FavFlowers extends React.Component {
  constructor(props){
    super(props);
    this.state={
      apiCrudData:[],
      showData:false
    }
  }

  componentDidMount = async () =>{
  const req= await axios.get(`${process.env.REACT_APP_SERVER}/flowers/favorite`);
    this.setState({
    apiCrudData: req.data,
    showData:true
    })
  }

  deleteFavFlowers = async (id) =>{
  await axios.delete(`${process.env.REACT_APP_SERVER}/flowers/favorite/${id}`)
  const items = this.state.apiCrudData.filter(obj=>obj._id !== id)
  this.setState({
    apiCrudData: items,
    showData:true
    })
  
  }

  render() {
    return(
      <div>
        {this.state.showData &&
        <FavCards
        apiCrudData={this.state.apiCrudData}
        deleteFavFlowers={this.deleteFavFlowers}
        />
  }
      </div>
    )
  }
}

export default FavFlowers;
