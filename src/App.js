import React from 'react';
import './App.css';
// import Greet  from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionalClick from "./components/FunctionalClick";
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'


function App() {
  return (
    <div className="App">
    <UserGreeting/>
    {/*<ParentComponent/>*/}
    {/*<EventBind/>*/}
    {/*<FunctionalClick/>*/}
    {/*<ClassClick/>*/}
      {/*<Greet name="Virat" idolize="me"><p>this is children prop</p></Greet>
      <Greet name="Rohit" idolize="Smith"><button class="btn">
              Does nothing <span class="badge badge-primary"></span>
      </button></Greet>
      <Greet name="Babar" idolize="no one"/>
      <Welcome name="Virat" idolize="me"/>
  <Welcome name="Rohit" idolize="Smith"/>
      <Welcome name="Babar" idolize="no one"/> 
      <Message/>
  <Counter/>*/}
    </div>
  );
}

export default App;
