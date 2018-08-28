import React, {Component} from 'react';
import {Grid, Col, Button, FormControl, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  setDestinyValue,
  setoriginValue,
  setMinValue,
  setTime,
  setPlan,
  setTable,
  setWithoutPlan,
  setWithPlan,
  clear,
  clearTable,
  getTableInit
} from '../../actions/homeActions';
// Components
import {addTable, deleteTable, getTable} from '../../helpers/requests';
import ExampleTable from '../exampleTable/exampleTable';

class resultForm extends Component {
  static propTypes = {
    home: PropTypes.shape ({
      originValue: PropTypes.string.isRequired,
      setTime: PropTypes.number.isRequired,
      destinyValue: PropTypes.string.isRequired,
    }),
  };

  simulation = e => {
    const {setTime, setWithoutPlan, setWithPlan} = this.props;
    setTime(e);
    setWithoutPlan();
    setWithPlan();
  };

  changeMinValue = async () => {
    const {
      home: {originValue, destinyValue, time, plan, withPlan, withoutPlan},
    } = this.props;

    if (time.length === 0) {
      alert('Por favor, preencha a quantidade de tempo');
    } else if (time <= 0) {
      alert(
        'Por favor, preencha a quantidade de tempo com valores acima de "0"'
      );
    } else {
      await addTable(
        originValue,
        destinyValue,
        time,
        plan,
        withPlan,
        withoutPlan
      );
      this.props.getTableInit();
      this.props.clear();
    }
  };

  render() {
    const {home: {originValue, destinyValue, time, plan}} = this.props;

    return (
      <div>
        <Grid>
          <Col xs={12} md={6}>
            <h1>Simulação</h1>
            <label htmlFor="Selecione a origem da ligação:">
            Call orgin:
              <br />
              <FormControl
                componentClass="select"
                value={originValue}
                onChange={e => {
                  this.props.setoriginValue (e.target.value);
                  this.props.setWithPlan ();
                  this.props.setMinValue ();
                }}
              >
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
              </FormControl>
            </label>
            <br />
            <label htmlFor="Selecione o destino da ligação:">
            Call destination:
              <br />
              <FormControl
                componentClass="select"
                value={destinyValue}
                onChange={e => {
                  this.props.setDestinyValue (e.target.value);
                  this.props.setWithPlan ();
                  this.props.setMinValue ();
                }}
              >
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
              </FormControl>
            </label>
            <br />
            <label htmlFor="Time in minutes">
              Time in minutes:
              <br />
              <FormControl
                type="number"
                value={time}
                onChange={e => this.simulation (e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="Selecione o plano">
              Select a plan:
              <br />
              <FormControl
                componentClass="select"
                value={plan}
                onChange={e => {
                  this.props.setPlan (e.target.value);
                  this.props.setWithPlan ();
                }}
              >
                <option value={30}>
                  Plus 30
                </option>
                <option value={60}>
                  Plus 60
                </option>
                <option value={120}>
                  Plus 120
                </option>
              </FormControl>
            </label>

            <br />
            <Button
              bsStyle="primary"
              block
              onClick={() => {
                this.changeMinValue();
              }}
            >
            Simular
            </Button>
            <Button
              bsStyle="seccondary"
              block
              onClick={() => {
                deleteTable();
                this.props.clearTable();
              }}
            >
              <Glyphicon glyph="glyphicon glyphicon-repeat" /> Clear table
            </Button>
            <br />
          </Col>
          <ExampleTable />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.homeReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setoriginValue,
      setDestinyValue,
      setMinValue,
      setTime,
      setPlan,
      setWithoutPlan,
      setWithPlan,
      clear,
      clearTable,
      setTable,
      getTableInit,
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps)(resultForm);
