import './App.css';
import Nav from './nav'
import LoginForm from './form'
import Footer from './footer'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

// Above imports necessary files for app to display/work StylePropertyMapReadOnly.  Below 
// is the App itself which pulls its functions from each js file for Nav, LoginForm, and 
// the Footer

function App() {
  return (
    <div className="App">
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;

