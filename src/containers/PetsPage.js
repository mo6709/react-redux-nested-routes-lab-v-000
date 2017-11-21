import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }
  
  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <PetsList pets={this.props.pets}/>
        <Switch>
          <Route path={`${this.props.match.url}/new`} component={PetsNew} />   
          <Route path={`${this.props.match.url}/:petId`} component={PetsShow} />
          <Route path={this.props.match.url} render={()=> <h1>Please Select a pet from the list.</h1>}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
