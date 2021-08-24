import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavCards from './FavCards';
import FormModal from './FormModal';




class FavFlowers extends React.Component {
  constructor(props){
    super(props);
    this.state={
      apiCrudData:[],
      showData:false,
      showModal:false
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

  handelModalUpdate = (item)=>{
    this.setState({showModal:true , updatedData:item})
}

updateFavFlowers = (e)=>{
    const id = this.state.updatedData._id;
    const body ={
        name:e.target.name.value,
        photo:e.target.photo.value,
        instructions:e.target.instructions.value,
    }
    const req=  axios.put(`${process.env.REACT_APP_SERVER}flowers/favorite/${id}`,body);
    const newItem = this.state.apiCrudData.map(obj=>{
        if(obj._id === id){
            obj.name = req.data.name
            obj.photo=req.data.photo
            obj.instructions=req.data.instructions
            
            return obj
        }
        return obj
    });
    this.setState({apiCrudData:newItem});
    this.handelModalUpdate({});
    this.setState({showModal:false})
}


close = () =>{
    this.setState({
        showModal:false
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

{this.state.showModal &&
                <FormModal 
                updatedData={this.state.updatedData}
                updateFavFlowers={this.updateFavFlowers}
                showModal={this.state.showModal}
                close={this.close}
                />
                }
      </div>
    )
  }
}

export default FavFlowers;
