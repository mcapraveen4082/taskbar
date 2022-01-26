import React  from 'react';
import './App.css';
import 'h8k-components';
import Taskbar from './components/taskbar';
// import Header from './components/header';
import Leftpanel from './components/leftpanel';

const title = "Taskbar";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <div className="wrapper-container">
        <Leftpanel/>
        {/* <Header/> */}
        <Taskbar/>
      </div>
    </div>
  );
}

export default App;
