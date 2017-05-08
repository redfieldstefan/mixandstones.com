import React, {Component} from "react";
import { connect } from "react-redux";
import BasePage from "../components/BasePage";

class Home extends Component {
  render() {
    return (
      <BasePage>
        <div className="Home">
          <p className="App-intro">
            Velcomen Home
          </p>
        </div>
      </BasePage>
    )
  }
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
