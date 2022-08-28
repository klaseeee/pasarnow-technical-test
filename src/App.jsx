import NavBar from './components/Navbar';
import {Footer} from './pages';

const App = () => {
  return (
    <div className="App bg-white relative dark:bg-slate-800">
      <NavBar/>
      <Footer/>
    </div>
  );
}

export default App;
