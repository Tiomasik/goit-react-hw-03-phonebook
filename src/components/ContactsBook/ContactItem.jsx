import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id, deleteContact }) => (
    <>
        <p>{ name }: {number}</p>
        <button type="button" onClick={() => deleteContact(id)}>Delete contact</button>
    </>
)

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactItem