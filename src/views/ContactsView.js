import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

export const ContactsView = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
