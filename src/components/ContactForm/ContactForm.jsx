import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import toast from 'react-hot-toast';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Button, TextField, Box, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#bfcbd0',
      main: '#b0bec5',
      dark: '#7b8589',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f54d7f',
      main: '#f32160',
      dark: '#aa1743',
      contrastText: '#fff',
    },
  },
});

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

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmitContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isName = data.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    const contact = {
      name,
      number,
    };

    if (isName) {
      toast.error(`${name} is already in contacts.`);
    } else {
      addContact(contact);
      toast.success('Contact added');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    formSubmitContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            color: 'primary',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h4">
            Create new contact
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              inputProps={{
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              }}
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              type="text"
              value={name}
              onChange={handleInputChange}
            />

            <TextField
              inputProps={{
                pattern:
                  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
              }}
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="number"
              label="Phone number"
              type="tel"
              id="number"
              autoComplete="number"
              value={number}
              onChange={handleInputChange}
            />
            <Button
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                '&:hover': {
                  bgcolor: 'secondary.main',
                  contrastText: 'secondary.contrastText',
                },
              }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
