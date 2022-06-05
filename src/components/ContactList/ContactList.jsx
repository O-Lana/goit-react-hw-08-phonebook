import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { getFilterValue } from 'redux/filterSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'common/theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

export const ContactList = () => {
  const { data = [], error, isLoading } = useGetContactsQuery();
  const contacts = data;
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            color: 'primary',
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid item xs={12} md={6}>
            {isLoading && <p>Loading...</p>}
            {!isLoading && contacts.length === 0 && (
              <p>Your phonebook is empty!</p>
            )}

            {error && contacts?.length > 0 && (
              <p>Something went wrong. Please refresh the page</p>
            )}
            {contacts?.length > 0 && !error && (
              <List>
                {filteredContacts.map(contact => (
                  <ContactListItem key={contact.id} {...contact} />
                ))}
              </List>
            )}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
