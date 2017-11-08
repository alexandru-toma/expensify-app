import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>This is my Info component:  {props.info}</h1>
        </div>
    );
}

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            
            ):(
                <p> Please login to view the info</p>
            )}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo info = 'alex component'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info = 'alex component'/>, document.getElementById('app'));
