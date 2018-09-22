import React from 'react';
import { Router ,Route,Switch} from 'dva/router';
import App from './routes/IndexPage'
import PropTypes from 'prop-types'
import Test from './routes/Test'
import Products from './routes/Products'
import IndexPage from './routes/IndexPage'
import Mdl from './routes/Mdl'

const registerModel = (app,model) => {
  if (!app._models.filter(m => m.namespace === model.namespace).length === 1) {
    app.model(model)
  }
}

function RouterConfig({ history ,app }) {
  // const routes = [
  //   {
  //     path: '/',
  //     components: App,
  //     getIndexRoute (nextState,cb) {
  //       require.ensure([],require => {
  //         registerModel(app,require('./models/example').default)
  //         cb(null,{components: require('./routes/IndexPage')})
  //       },'main')
  //     },
  //     childRoutes: [
  //       {
  //         path: '/test',
  //         getComponent (nextState,cb) {
  //           require.ensure([],require => {
  //             registerModel(app,require('./models/Test/index').default)
  //             cb(null,{components: require('./routes/Test')})
  //           },'Products')
  //         }
  //       },
  //       {
  //         path: '/products',
  //         getComponent (nextState,cb) {
  //           require.ensure([],require => {
  //             registerModel(app,require('./models/products').default)
  //             cb(null,{components: require('./routes/Products')})
  //           },'Products')
  //         }
  //       }
  //     ]
  //   },
  // ]
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={Test} />
        <Route path="/products" exact component={Products} />
        <Route path="/mdl" exact component={Mdl}/>
      </Switch>
    </Router>
  );
}

Router.propTypes ={
  history: PropTypes.object,
  app: PropTypes.object
}

export default RouterConfig;
