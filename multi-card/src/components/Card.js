import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        // course is already liked
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter ( (cid) => (cid !== course.id) ) );
            toast.warning("Liked Removed ");
        }

        else{
            // course is not liked 
            // need to insert in liked courses array
            if(likedCourses.length ===0){
                setLikedCourses( [course.id])
            }

            else{
                setLikedCourses((prev ) => [...prev , course.id] ) 
            }
            toast.success("Liked Successfully");


        }
    }


   return (
        <div className="card-wrapper">
            <div className="card-image-box">
                <img src={course?.image?.url} alt={course?.title} />
                <div className="like-btn-container">
                    <button onClick = {clickHandler}>
                        {
                            likedCourses.includes(course.id) ? 
                            ( <FcLike  fontSize="1.75rem" /> ) :
                            (<FcLikePlaceholder fontSize="1.75rem" />)
                            
                         
                        }
                        
                    </button>
                </div>
            </div>

            <div className="card-info">
                <p className="course-title">{course?.title}</p>
                <p className="course-description">
                    {
                        course.description.length > 0 ?
                        (course.description.substr(0,100) ) + "...":
                        (course.description) 
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;