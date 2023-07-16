import React , {useState}from 'react';
import styles from './Search.module.css'
const Search = () => {
    const [search , setSearch] = useState("");
    const ChangeHandler = (event) =>{
        setSearch(event.target.value)
    }
    return (
        <div className={styles.container}>
            <p>Search What You Want?</p>
            <div >
              <input placeholder='search...' value={search}  onChange={ChangeHandler}/>
               <br />
               <br />
               <span>{search}</span>
            </div>
            
        </div>
    );
};

export default Search;