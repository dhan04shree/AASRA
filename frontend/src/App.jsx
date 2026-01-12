
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
function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>}></Route>
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
