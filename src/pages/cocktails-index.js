import BasePage from "../components/base-page";
import CocktailLi from "../components/cocktail-li";
import { connect } from "react-redux";
import cocktailActions from "../actions/cocktails";
import React, { Component } from "react";
import {bindMethods} from '../utils';

class CocktailsIndex extends Component {

  constructor(props) {
    super(props);

    bindMethods([
      'selectCocktail'
    ], this);
  }

  componentDidMount() {
    if(this.props.selectedCocktail) {
      this.props.clearCocktail();
    }
    this.props.fetchCocktails();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedCocktail.url) {
      nextProps.history.push(`/cocktail/${nextProps.selectedCocktail.url}`);
    }
  }

  selectCocktail(cocktail) {
    this.props.selectCocktail(cocktail);
  }

  render() {
    return (
      <BasePage className="CocktailsIndex">
        {
          this.props.cocktails.map(cocktail => (
            <CocktailLi cocktail={cocktail} onClick={this.selectCocktail}/>
          ))
        }
      </BasePage>
    )
  }

};

const mapStateToProps = ({cocktails}) => {
  return {
    cocktails: cocktails.allCocktails,
    selectedCocktail: cocktails.currentCocktail
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCocktail: () => {
      dispatch(cocktailActions.clearCocktail());
    },
    fetchCocktails: () => {
      dispatch(cocktailActions.fetchAllCocktails());
    },
    selectCocktail: (cocktail) => {
      dispatch(cocktailActions.selectCocktail(cocktail));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex);
