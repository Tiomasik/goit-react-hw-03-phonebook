import PropTypes from 'prop-types';

import { StyleName } from './Filter.styled'
import { StyleInput } from './Filter.styled'

const Filter = ({ value, changeFilter }) => (
    <div>
        <h3 style={{textAlign: 'center',
                    fontSize: 26,
                    fontWeight: 700,
                    marginTop: 0,
                    marginBottom: 10}}>Contacts</h3>
        <StyleName htmlFor='filter'>Find contacts by names</StyleName>
        <StyleInput type="text"
                id='filter'
                value={value}
                onChange={changeFilter}/>
    </div>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}

export default Filter