
import {Buttons} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

function FeedbackOptions({options, onchangeState}) {
    return (
        <>
            {options.map(item => {
                return (
                    <Buttons onClick={()=>onchangeState(item)} key={item}>{item}</Buttons>
                )
            })}
        </>
    )
}


FeedbackOptions.propTypes = {
onchangeState:PropTypes.func,
}

export default FeedbackOptions;