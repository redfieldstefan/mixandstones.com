import React, { Component } from "react";
import BasePage from "../components/base-page";
import { connect } from "react-redux";
import cocktailActions from "../actions/cocktails";

class CocktailPage extends Component {

  componentDidMount() {
    if(!this.props.cocktail.url) {
      const cocktailUrl = this.props.match.params.cocktail;
      this.props.fetchCocktail(cocktailUrl);
    }
  }

  render() {

    const {
      cocktail
    } = this.props;

    return (
      <BasePage className="CocktailPage">
        <h1>{cocktail.name}</h1>
        <p>{cocktail.description}</p>
      </BasePage>
    );
  }
}

const mapStateToProps = ({cocktails}) => {
  return {
    cocktail: cocktails.currentCocktail
  };
};

const mapDispatchToProps = (dipatch) => {
 return {
    fetchCocktail: (url) => {
      dipatch(cocktailActions.fetchCocktail(url));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailPage);

