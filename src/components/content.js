import React from 'react';
import {Link, Route} from 'react-router-dom';
const content = ({ match }) => (
  
  <div className="row">
  <div className="col-sm-3" style={{borderRight: "1px solid #ccc", height: "80vh", textAlign: "Left"}}>
  <br/><br/>
    <div className="list-group" style={{marginLeft: "10px"}}>
      <Link to={`${match.url}/`} className="list-group-item active">Configure</Link>
      <Link to={`${match.url}/attr-v-Tiers`} className="list-group-item">Attributes & Volume Tiers</Link>
      <Link to={`${match.url}/adjustments`} className="list-group-item">Adjustments</Link>
      <Link to={`${match.url}/summary`} className="list-group-item">Summary</Link>
    </div>
  </div>
  <div className="col-sm-9">
  <Route path={`${match.url}/:topicId`} component={Topic} />
    {/* <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    /> */}
  </div>
</div>
);

const Topic = ({ match }) => (
  <div>
    <h3>Hello!! {match.params.topicId}</h3>
  </div>
);


export default content;
