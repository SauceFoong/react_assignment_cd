import logo from './logo.svg';
import './App.css';
import { ApplicationForm } from './components/ApplicationForm' ;

function App() {
  return (
    <div className="xl:px-40 xl:py-20 App">
        <div className="bg-white w-30 py-8 px-6 shadow-2xl rounded-lg m-10">
        <ApplicationForm />
        </div>
    </div>
  );
}

export default App;

