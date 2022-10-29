import gql from 'graphql-tag';
import React from 'react';
import { useSubscription } from "use-subscription";

const SUBSCRIBELOGIN = gql`
    subscription login(
        $username:String!
    ){
        onsignin(
            username:$username
    ){
        id
        roles
        email
    }
    }
`;

export const NewNotification = () => {
    const { data, error, loading } = useSubscription(SUBSCRIBELOGIN, {
        variables: {
            username: 'elasdfg'
        }
    });

    if (loading) {
        return
        <div>
            loading...
        </div>;
    };

    if (error) {
        return
        <div>
            Error!{error.message}
        </div>;
    };

    return (
        <div>
            <p>
                <strong>
                    {!loading && data.login.id}
                </strong>
            </p>
            <p>
                <strong>
                    {!loading && data.login.roles}
                </strong>
            </p>
            <p>
                <strong>
                    {!loading && data.login.email}
                </strong>
            </p>
        </div>
    )
}

