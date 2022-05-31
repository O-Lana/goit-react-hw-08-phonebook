import { useState } from "react";
import { useGetContactsQuery, useAddContactMutation } from "redux/contactsApi";
// import { Form, Input, Button } from './ContactForm.styled';
// import toast from "react-hot-toast";

export function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const { data = [] } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();

    const handleInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'phone':
                setNumber(value);
                break;
            default: return;
        }
    };

    const formSubmitContact = ({ name, number }) => {
        const normalizedName = name.toLowerCase();
        const isName = data.find(
          (contact) => contact.name.toLowerCase() === normalizedName
        );

        const contact = {
            name,
            number,
          };
          
        if (isName) {
          alert(`${name} is already in contacts.`);
        } else {
  
        addContact(contact);
        alert('Contact added');
        };
    };

    const handleSubmit = event => {
        event.preventDefault();

        formSubmitContact({name, number});
        setName('');
        setNumber('');
    };  

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleInputChange}
                />
            </label>
            <label>
                Number
                <input
                type="tel"
                name="phone"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleInputChange }
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    )
}