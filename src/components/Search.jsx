import styles from "./search.module.css"
import { useState, useEffect } from "react"
//import search from "../icons/search"

function Search(){
    const [query, setQuery] = useState("fotball")
    useEffect(()=> {
        //write the api function here
        function demo(){
        //console.log("Demo function executed")
        }
        demo()
    }, [query])

    const handelChange = (e) => {
        setQuery(e.target.value)
    }
    
    
    return (
        <div className={styles.search}>
        <input value={query} onClick={(e)=> setQuery (e.target.value)}
        type="text"
        onChange={handelChange}
        placeholder="Search"
        className={styles.input}/>
    </div>

    )
}  
    

export default Search 