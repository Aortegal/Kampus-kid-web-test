import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './modalSignUp.css';

import ReactDOM from "react-dom";
import { ApolloProvider, Query ,mutation} from "react-apollo";

import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'http://localhost:4011/api',
    cache: new InMemoryCache(),
});

const ADD_TODO = gql`
    mutation login($username:String!, $password:String!){
    login(data:{username:$username, password:$password}){
    id,
    roles,
    email
    }}
`;

export const LoginPage = () => {
    let username, password;
    const [login] = useMutation(ADD_TODO);
  
    return (
      <>
        <form onSubmit={e=>{
            e.preventDefault(
                login(
                    {variables:{username:username.value, password:password.value}}
                )
            );
        }}> 
          <input ref={value=>username=value} id="username"/>
          <input ref={value=>password=value}  id="password"/>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }

