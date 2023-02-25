import { Link, Outlet } from "react-router-dom";

function BookLayout() {
    return ( 
        <div>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <Outlet context={{hello: "world"}}/>
        </div> 
    );
}

export default BookLayout;