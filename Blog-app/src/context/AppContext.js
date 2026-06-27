
import {createContext , useState} from 'react'
import {BaseUrl} from '../BaseUrl'

export const AppContext = createContext(); // created

//provider
export default function AppContextProvider({children}){
    const [loading , setLoading ] = useState(false);
    const [posts , setPosts ] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages ] = useState(null);

    //data filling
    async function fetchBlogPost(page = 1 ) {
        setLoading(true);
        let url = `${BaseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();   
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch (error){
            console.log("Network Error");
            alert("Error in fetching data ");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            
        }
        setLoading(false);
        
        
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page);
    }

    //sending 
    const value = {
        posts ,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange, 
    }

    return(
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>

    )
        
    
        
    
}

