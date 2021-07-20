import logo from './logo.svg';
import './App.css';
import { ApplicationForm } from './components/ApplicationForm' ;

function App() {
  return (
    <div className="App">
        <div className="bg-white py-8 px-6 shadow rounded-lg m-10">
        <ApplicationForm />
        </div>
    </div>
  );
}

export default App;

