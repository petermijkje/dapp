import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import { accountSelector, filledOrdersLoadedSelector, filledOrdersSelector } from '../../store/selectors'

class Trades extends Component {
  render(){
  return (
<div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <table className="table table-dark table-sm small">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Time</th>
      <th scope="col">DAPP</th>
      <th scope="col">DAPP/ETH</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
              </div>
            </div>
  );
}
}
function mapStateToProps(state) {
  return {
    filledOrdersLoaded: filledOrdersLoadedSelector(state),
    filledOrders: filledOrdersSelector(state),
  }
}

export default connect(mapStateToProps)(Trades)