import React from 'react';
import {
  Table, Row, Grid, Col,
} from 'react-bootstrap';

export const resultsTable = ({ results }) => (
  <div>
    {results.length > 0 ? (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Table responsive striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Time (min)</th>
                  <th>Plan Plus</th>
                  <th>With Plus Plan</th>
                  <th>Without Plus Plan</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, key) => (
                  <tr key={key}>
                    <td>{result.origin}</td>
                    <td>{result.destiny}</td>
                    <td>{result.time}</td>
                    <td>Plus {result.plan}</td>
                    <td>
                      {isNaN(result.withPlan) ? '-' : `$ ${result.withPlan}`}
                    </td>
                    <td>
                      {isNaN(result.withoutPlan) ? '-' : `$ ${result.withoutPlan}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    ) : null}
  </div>
);

export default resultsTable;
