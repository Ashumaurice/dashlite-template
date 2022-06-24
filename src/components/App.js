import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends Component {

  render() {
    return (
      <body className="nk-body bg-lighter npc-general has-sidebar ">
        <div className="nk-app-root">
          <div className="nk-main ">
            <Sidebar />
            <div className="nk-wrap ">
              <Header />
              <Content />
              <Footer />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
