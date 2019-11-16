import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Infor</h1>
    <p>Some Information: {props.info}</p>
  </div>
);

ReactDOM.render(<Info info='some details'/>, document.getElementById('app'));