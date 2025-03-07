// Write your code here
import "./index.css"

const AppointmentItem = props => {
    const {appointmentDetails, toggleIsStarred} = props
    const {id, title, date, isStarred} = appointmentDetails
    const staeImgUrl = isStarred
        ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
        : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    
    const onClickStar = () => {
        toggleIsStarred(id)
    }

    return (
        <li className="appointment-item">
            <div className="header-container">
                <p className="title">{title}</p>
                <button
                type="button"
                data-testId="star"
                className="star-button"
                onClick ={onClickStar}
                >
                <img src={staeImgUrl} className="star" alt="star"/>
                </button>
            </div>
            <p className="date"> Date:{date} </p>
        </li>
    )
}
export default AppointmentItem
