import Navbar from './navbar';
import Home from './Home.js';
import Create from './create.js';
import BlogDetails from './blog-details.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './notFound';
function App() {
  return (
    <Router> 
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
        <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path = "*">
           <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
