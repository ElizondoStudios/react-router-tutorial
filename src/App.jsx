import { Routes, Route, Link, useRoutes } from "react-router-dom"
import Home from "./pages/Home"
import BookRoutes from "./pages/BookRoutes"

function App() {

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/*" element={<BookRoutes/>}/>
        <Route path="*" element={<h1>404 Page not found</h1>}/>
      </Routes>

    </div>
  )
}

export default App
