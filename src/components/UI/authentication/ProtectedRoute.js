import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ user, component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render = { 
                (props) => {
                    if(user.name !== ''){
                        return (<Component user = {user}/>)
                    } else {
                        return (<Redirect to = {{pathname: '/login', state: {from : props.location}}}/>)
                    }
                }
            }
        />
    );
}
