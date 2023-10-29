import React from 'react';
import { UserContext } from '../../App'; // Import the context

function Child() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <h1>{context.text}</h1>
      )}
    </UserContext.Consumer>
  );
}

export default Child;
