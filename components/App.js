import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, { type: type})
    })
  }

  onFindPetsClick(){
    //fetch data
    let url = this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    fetch(url,{
      method: "GET"
    }).then(function(data){
      this.setState({
        pets: data
      })
    }
    )
  }

  onAdoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType.bind(this)} filters={this.state.filters} onFindPetsClick={this.onFindPetsClick.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
