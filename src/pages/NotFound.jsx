import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate= useNavigate()

    useEffect(
        () => {
            const Timeout=setTimeout(
                () => {navigate("/", {state: "redirected because of error"})},
                1000
            )

            return () => {clearTimeout(Timeout)} 
        },
        []
    )
    

    return ( 
        <div>
            <h1>404 Page not Found!</h1>
        </div>
     );
}

export default NotFound;