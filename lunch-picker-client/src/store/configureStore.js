import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import DevTools from '../containers/DevTools';
import { onlineActionMiddleware } from '../middlewares';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(ReduxThunk, onlineActionMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./rootReducer.js', () =>
      store.replaceReducer(
        require('./rootReducer') /*.default if you use Babel 6+ */
      )
    );
  }

  return store;
}
