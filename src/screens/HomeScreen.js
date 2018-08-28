import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { getTableInit } from "../actions/homeActions";
// Components
import ResultsTable from "../components/resultsTable/resultsTable";
import ResultForm from "../components/resultsForm/resultForm";

class HomeScreen extends Component {
  componentDidMount = () => {
    this.props.getTableInit();
  };

  render() {
    const { table } = this.props;
    return (
      <div>
        <ResultForm />
        <ResultsTable results={table} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  table: state.homeReducer.results
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTableInit
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
