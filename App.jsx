import {Routets,Route} from 'react'
const App=()=>{
  return(
    <div>
      <Router>
        <Route path='/' element={<h1>Home page</h1>}></Route>
        <Route path='/counter' element={<h1>Counter app</h1>}></Route>
        <Route path='/stopwatch' element={<h1>stop watch</h1>}></Route>
        <Route path='*' element={<h1>no available page</h1>}></Route>
      </Router>
    </div>
  )
}