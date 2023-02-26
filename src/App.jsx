import { Routes, Route, Link, useRoutes, NavLink, Navigate, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import BookRoutes from "./pages/BookRoutes"
import NotFound from "./pages/NotFound"

function App() {

  const location= useLocation()
  console.log(location)

  const element= useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "*",
      element: <h1>404 Page not found</h1>
    }
  ])

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink
             style={({isActive}) => isActive? {color: "red"}: {}}
             to="/"
             state="hi"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" end>Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/*" element={<BookRoutes/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </div>
  )
}

export default App
