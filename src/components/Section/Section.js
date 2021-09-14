
import PropTypes from 'prop-types';
import {SectionItem ,Title} from './Section.styled'

function Section({ text, children }) {
    return (
        <SectionItem >
            <Title>{text}</Title>
            {children}
        </SectionItem >
)
}

Section.propTypes = {
    text:PropTypes.string,
}

export default Section;