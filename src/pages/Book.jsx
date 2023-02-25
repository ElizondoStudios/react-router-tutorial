import { useOutletContext, useParams } from "react-router-dom";

function Book() {
    const {id}= useParams()
    const object= useOutletContext()

    return ( 
        <div>
            <h1>Book {id} {object.hello}</h1>
        </div>
     );
}

export default Book;