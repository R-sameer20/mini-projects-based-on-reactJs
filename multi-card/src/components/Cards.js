import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses , setLikedCourses] = useState([])

    function getCourses () {
        if(category == "All"){
            if(!courses) return[];
            let allCourse = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourse.push(courseData);
                });
            });

            return allCourse;
        }
        else{
            // specific category array 
            return courses[category]
        }
        
    }

    return(
        <div className="cards-container">
            {getCourses().map((course) => {
                return <Card key={course.id} 
                course={course}
                likedCourses = {likedCourses}
                setLikedCourses = {setLikedCourses} />
            })}
        </div>
    )
}

export default Cards;