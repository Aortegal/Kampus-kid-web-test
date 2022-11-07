import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const GetUserQuery = gql`
  {
    user{
      id
      roles
      email
    }
  }
`

class UserList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Demo">
        <ul id="lista-usuarios">
          <li>Lista de usuarios</li>
        </ul>
      </div>
    );
  }
}

export default graphql(GetUserQuery)(UserList);