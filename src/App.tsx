import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './Components/ErrorPage';
import PrivateRoute from './Components/PrivateRoute';
import LogOut from './Components/LogOut';
import { CounterProvider } from './Context/CounterContext';
import Display from './Components/Display';
/*import TaskList from './Components/TaskList';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import PageNotFound from './Components/PageNotFound';
import Login from './Components/Login';
import TaskPage from './Components/TaskPage';*/
const HomePage=React.lazy(()=>import('./Components/HomePage'));
const SignUp =React.lazy(()=>import( './Components/SignUp'));
const PageNotFound=React.lazy(()=>import ('./Components/PageNotFound'));

const Login=React.lazy(()=>import( './Components/Login'));

const TaskPage=React.lazy(()=>import('./Components/TaskPage'));
const TaskList=React.lazy(()=>import( './Components/TaskList')); 
const EditTaskPage=React.lazy(()=>import( './Components/EditTaskPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Page.....</div>}>
     <Routes>
      <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>}></Route>
      <Route path='/signup' element={<ErrorBoundary FallbackComponent={ErrorPage}><SignUp></SignUp></ErrorBoundary>}> </Route>
      <Route path='/login' element={<ErrorBoundary FallbackComponent={ErrorPage}><Login></Login></ErrorBoundary>}></Route>
     <Route path='/logout' element={<LogOut></LogOut>}></Route>
     <Route path='/task/create' element={<PrivateRoute><ErrorBoundary FallbackComponent={ErrorPage}><TaskPage></TaskPage></ErrorBoundary></PrivateRoute>}></Route>
      <Route path='/task/viewAll' element={<TaskList></TaskList>}></Route>
      <Route path='/edit/:taskName' element={<PrivateRoute><EditTaskPage></EditTaskPage></PrivateRoute>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
     <Route path='/count' element={<CounterProvider><Display></Display></CounterProvider>}></Route>
     </Routes></Suspense>
    </div>
  );
}

export default App;
