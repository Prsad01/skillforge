import './App.css';
import { Route, Routes,BrowserRouter} from "react-router-dom";
import LoginForm from './components/Login';
import List from './components/ListCourse';
import CreateCourse from './components/CreateCourse'

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>

            <Route path="/" exact element={ <LoginForm/> } />
            <Route path="/courses" exact element={<List />} />
            <Route path="/createcourse" exact element={<CreateCourse />} />

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
