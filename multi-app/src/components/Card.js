import react from 'react'

const Card = ({course}) => {
    return (
        <div>
            <div>
                <img src={course.image.url}>
            </div>
        </div>
    );

};
export default Card;