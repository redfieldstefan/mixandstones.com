import React, { Component } from "react";
import { connect } from "react-redux";
import cocktailActions from "../actions/cocktails";

class CocktailPage extends Component {

  componentDidMount() {
    if(!this.props.cocktail) {
      const cocktailUrl = this.props.match.params.cocktail;
      this.props.fetchCocktail(cocktailUrl);
    }
  }

  render() {
    return (
      <div className="CocktailPage">
        <h1>AHHHHH</h1>
      </div>
    )
  }

}

const mapStateToProps = ({cocktails}) => {
  return {
    cocktail: cocktails.currentCocktail
  }
};

const mapDispatchToProps = (dipatch) => {
 return {
    fetchCocktail: (url) => {
      console.log("Url")
      console.log(url)
    }
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailPage);

