import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import './App.css';
// import { Layout, Header, Navigation } from 'react-mdl';
import { Layout , Header, Navigation} from '../../node_modules/react-mdl/lib/Layout';
// import Main from './components/main';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <button>测试Mdl</button>
        <Layout>
          <Header>
            <div className="container">
              <div className="logo"><a href="/"><img src="https://s3.amazonaws.com/truebase/static/truebase_logo.png" /></a></div>
              <Navigation>
                <a href="/">About</a>
                <a href="https://www.trueprotocol.com">Protocol</a>
              </Navigation>
              <div className="login_buttons">
                <Navigation>
                  <a href="/login">Login</a>
                  <a href="/signup" className="signs">Sign Up</a>
                </Navigation>
              </div>
              <div className="right_search">
                <form><i className="fa fa-search"></i>
                  <input type="text" className="key_input" placeholder="Search for Companies or People" />
                  <div className="sarch_rslt">
                    <ul>
                      <li>
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                        <h5>Pretend Co</h5>
                        <p>San Francisco, Ca, USA</p>
                      </li>
                      <li>
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                        <h5>Pretend Co</h5>
                        <p>San Francisco, Ca, USA</p>
                      </li>
                      <li>
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                        <h5>Pretend Co</h5>
                        <p>San Francisco, Ca, USA</p>
                      </li>
                      <li>
                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                        <h5>Pretend Co</h5>
                        <p>San Francisco, Ca, USA</p>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default App
