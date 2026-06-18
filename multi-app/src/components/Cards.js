import React from 'react'
import Card from 'Card'
const Cards = ({course}) => {
    let allCourse = [];
    const getCources = () => {
        
        Object.values(course).forEach((courseCategory) => {
            courseCategory.forEach( (course) => {
                allCourse.push(course);
            })
        })
        return allCourse;
    }
    








    return(
        <div>
            getCources().map( (course) => {
                <Card course = {course}/>
            })
        </div>
    )
}

export default Cards;