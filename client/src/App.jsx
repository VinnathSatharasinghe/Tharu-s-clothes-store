import RouterSetup from "../RouterSetup";
import './App.css'
import { ThemeProvider } from './util/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ThemeProvider>
     <RouterSetup />
    </ThemeProvider>
  );
}

export default App;

