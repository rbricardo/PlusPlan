import React from 'react';
import { Table, Col } from 'react-bootstrap';

export const exampleTable = () => (
  <Col xs={12} md={6}>
    <h1>
      Nossas Tarifas
    </h1>
    <Table responsive striped bordered condensed hover>
      <thead>
        <tr>
          <th>
            Origin
          </th>
          <th>
            Destination
          </th>
          <th>
            $/min
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            011
          </td>
          <td>
            016
          </td>
          <td>
            1.90
          </td>
        </tr>
        <tr>
          <td>
            016
          </td>
          <td>
            011
          </td>
          <td>
            2.90
          </td>
        </tr>
        <tr>
          <td>
            011
          </td>
          <td>
            017
          </td>
          <td>
            1.70
          </td>
        </tr>
        <tr>
          <td>
            017
          </td>
          <td>
            011
          </td>
          <td>
            2.70
          </td>
        </tr>
        <tr>
          <td>
            011
          </td>
          <td>
            018
          </td>
          <td>
            0.90
          </td>
        </tr>
        <tr>
          <td>
            018
          </td>
          <td>
            011
          </td>
          <td>
            1.90
          </td>
        </tr>
      </tbody>
    </Table>
  </Col>
);

export default exampleTable;
