import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled.jsx'

function Notification({ message }) {
    return (
        <>
            <NotificationMessage>{message}</NotificationMessage>
        </>
        
    )
}


Notification.propTypes = {
    message:PropTypes.string,
}

export default Notification;