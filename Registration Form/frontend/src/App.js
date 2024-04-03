import Register from './components/Register';
import Login from './components/login';
import UserTable from './components/UserTable';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<ProtectedRoute />}> */}     
            <Route path="/UserTable" element={<UserTable />} />
          {/* </Route> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
