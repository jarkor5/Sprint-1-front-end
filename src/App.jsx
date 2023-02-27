import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/NavBar/Header';
import Main from './components/Main/Main';
import FormSignUp from './components/FormSignUp/FormSignUp.jsx';

function App(){
  return (
    <div className="app-container">
      <div>
        <Header/>
        <div/>
    <Main/>

    <FormSignUp/>

    </div>
    </div>
  );
          }

export default App;
