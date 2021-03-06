import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import config from './config';

import './index.less';

const store = configureStore();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'restaurants',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
      {
        name: 'teams',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
      {
        name: 'users',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
