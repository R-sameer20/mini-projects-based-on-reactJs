import React , {useContext  } from 'react'
import {AppContext} from '../context/AppContext';
import Spinner from './Spinner'


const Blogs = () => {

    //CONSUMING
    const { loading , posts} = useContext(AppContext);


  return (
    <div className="11/12 max-w-[650px] py-3 flex flex-col gap-y-8 mt-[60px] mb-[60px]" >
        {
            
        loading ? 
        (<Spinner></Spinner>) : 
        (
          posts.length === 0 ? 
          (<div>
            <p> No Post FOund </p>
          </div>) : 
          (posts.map( (post)=> (

            <div key = {post.id} >
                <p className="  text-[16px] font-bold " >{post.title}</p>

                <p
                    className="text-[12px] "
                >
                    By <span className=" italic  " >{post.author}</span  > on <span className=" underline bold " >{post.category}</span>
                </p>

                <p
                    className=" text-[12px] "
                >
                    Posted On : <span>{post.date}</span>
                </p>

                <p
                    className=" text-[14px] mt-[10px]"
                >{post.content}</p>

                <div className=" flex gap-x-[5px]  "  >
                    {
                        post.tags.map((tag , index) => {
                            return <span 
                                        key = {index}  
                                        className=" font-bold text-blue-500 text-[10px] mt-[5px] underline "
                                    >{` #${tag}`}</span>
                        })
                    }
                </div>

            </div>

          ) ) ) 
        )


        }
    </div>
  )
}

export default Blogs