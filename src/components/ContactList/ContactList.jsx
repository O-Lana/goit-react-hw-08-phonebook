import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { getFilterValue } from 'redux/filterSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const { data = [], error, isLoading } = useGetContactsQuery();
  const contacts = data;
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && contacts.length === 0 && <p>Your phonebook is empty!</p>}

      {error && contacts?.length > 0 && (
        <p>Something went wrong. Please refresh the page</p>
      )}
      {contacts?.length > 0 && !error && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </div>
  );
};
