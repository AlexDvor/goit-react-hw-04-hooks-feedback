
// import style from './FeedBackStat.module.css'
import Notification from "../Notification";
import PropTypes from 'prop-types';
import { FeedBackItem } from './Statistics.styled'

function Statistics({ good,neutral,bad,total,positivePercentage }) {
    return (
        <>
            {total > 0 ? <>
            <FeedBackItem>good: {good}</FeedBackItem>
            <FeedBackItem>neutral: {neutral}</FeedBackItem>
            <FeedBackItem>bad: {bad}</FeedBackItem>
            <FeedBackItem>total: {total}</FeedBackItem>
            <FeedBackItem>positive feedback: {positivePercentage}%</FeedBackItem>
            </> : <Notification message="No feedback given"></Notification>}
        </>
    )
}

Statistics.propTypes = {
    good:PropTypes.number,
    number:PropTypes.number,
    bad: PropTypes.number,
    total:PropTypes.number,
    positivePercentage :PropTypes.number,
}




export default Statistics;