import { Link, Outlet, useSearchParams } from "react-router-dom";


function BookLayout() {

    const [SearchParams, setSearchParams]= useSearchParams({n: 3})
    const Number=SearchParams.get("n")

    return ( 
        <div>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <br />
            <Link to={`/books/${Number}`}>Book {Number}</Link>
            <Outlet context={{hello: "world"}}/>
            <input type="number" name="number" 
             value={Number}
             onChange={(e) => {setSearchParams({n: e.target.value})}}
            />
        </div> 
    );
}

export default BookLayout;