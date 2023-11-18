import React from 'react'
import './Card.css';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

const Card = ({id, title, tag, status, username, userId}) => {
    const {allUser} = useSelector(state => state.DataReducer);
  const isAvailable = allUser.find(user => user.id === userId)?.available;
//   console.log("isavail= ", isAvailable);
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={"https://ui-avatars.com/api/?background=random&color=ff&name="+username} alt="UserImage" />
                <div className={isAvailable ? "statusAvailable":"statusUnavailable"}></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;