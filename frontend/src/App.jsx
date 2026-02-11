
import './App.css'
import Dashboard from "./components/Dashboard"
import Login from './components/LoginForm'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Registration from './components/Registration'
import CheckEligi from './components/CheckEligi'
import ExploreMaps from './components/ExploreMaps'
import TrackApplication from './components/TrackApplication'
import ViewSchemes from './components/ViewSchemes'
import {Route,Routes} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'

import Dashboard_NGO from "./pages/Dashboard_NGO";
import Projects from "./pages/Projects";
import Applications from "./pages/Applications";
import Reports from "./pages/Reports";
function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>}>
          
         <Route index element={<Dashboard_NGO />} />

        {/* Other tabs */}
        <Route path="projects" element={<Projects />} />
        <Route path="applications" element={<Applications />} />
        <Route path="reports" element={<Reports />} />
          </Route>

        <Route path="/eligibility" element={
          <ProtectedRoute>
            <CheckEligi/>
          </ProtectedRoute>}></Route>
          
        <Route path="/maps" element={
          <ProtectedRoute>
            <ExploreMaps/>
          </ProtectedRoute>}></Route>
        <Route path="/track" element={
          <ProtectedRoute>
             <TrackApplication/>
          </ProtectedRoute>
         }></Route>
        <Route path="/schemes" element={
          <ProtectedRoute>
            <ViewSchemes/>
          </ProtectedRoute>
          }></Route>

        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
