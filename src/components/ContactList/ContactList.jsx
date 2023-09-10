import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/ContactListSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getContactsItems } from '../../redux/ContactListSlice';
import { getFilterValue } from '../../redux/FilterSlice';


import '../../components/ContactList/ContactList.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = useMemo(() => () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterValue]);

  const filteredContacts = getFilteredContacts();
  return (
    <ul className="contact_list">
      {  filteredContacts &&  filteredContacts.map(({ id, name, number }) => {
        return (
          <li className="contact_item" key={id}>
            <p className="contact__text">{name}</p>
            <p className="contact__text">{number}</p>
            <button className="btn"  onClick={() => dispatch(deleteContact({id: id}))}>
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  OnDelite: PropTypes.func.isRequired,
};
