import BasePage from "../components/base-page";
import CocktailLi from "../components/cocktail-li";
import { connect } from "react-redux";
import cocktailActions from "../actions/cocktails";
import React, { Component } from "react";

class CocktailsIndex extends Component {

  componentDidMount() {
    this.props.fetchCocktails();
  }

  render() {
    return (
      <BasePage className="CocktailsIndex">
        {
          this.props.cocktails.map(cocktail => <CocktailLi {...cocktail} />)
        }
      </BasePage>
    )
  }

};

const mapStateToProps = ({cocktails}) => {
  return {
    cocktails: cocktails.allCocktails
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCocktails: () => {
      dispatch(cocktailActions.fetchAllCocktails());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex);
