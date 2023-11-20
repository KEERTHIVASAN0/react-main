import React from 'react'
import './App.css';
import MyFunctionalComponent from './Functional';
import ParentComponent from './pasing';
import TernaryExample from './ternery';
import DataFetcher from './Api';
import Counter from './counter';
import LoginForm from './Event';



// Parent Component
const App = () => {
  return (
    <div>
      <LoginForm />
      <ParentComponent />
      <TernaryExample />
      <MyFunctionalComponent  name="Keerthivasan"/>
      <Counter />
      <DataFetcher />
      
      
    </div>
  );
};


export default App;
