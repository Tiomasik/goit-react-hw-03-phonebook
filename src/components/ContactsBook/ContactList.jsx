import PropTypes from 'prop-types';
import ContactItem from './ContactItem'
import { List, Item } from './ContactList.styled'

const ContactList = ({ contacts, deleteContact }) => (
    <List>
        {contacts.map(({ id, name, number }) =>
            <Item key={id}>
                <ContactItem name={name}
                    number={number}
                    id={id}
                    deleteContact={deleteContact} />
            </Item>)}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    
    deleteContact: PropTypes.func.isRequired
}

export default ContactList