import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import Validation from './component/Validation';
import WizardTest from './component/WizardTest';
import BlockUI from './component/BlockUI';
import PhoneForm from './component/PhoneForm';

import SelectTest from './component/SelectTest';
import Example from './component/Example';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
     <Home />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
