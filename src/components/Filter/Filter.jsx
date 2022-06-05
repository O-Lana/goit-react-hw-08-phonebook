import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilterValue } from 'redux/filterSlice';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'common/theme';
import { Container, TextField, Box, Typography } from '@mui/material';

export const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            color: 'primary',
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h4">
            Contacts
          </Typography>
          <TextField
            color="secondary"
            margin="normal"
            fullWidth
            label="Find contacts by name"
            type="text"
            size="small"
            value={value}
            onChange={handleChangeFilter}
            sx={{ marginTop: 3 }}
          ></TextField>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
