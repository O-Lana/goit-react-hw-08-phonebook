import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'common/theme';
import { grey } from '@mui/material/colors';
import authOperations from 'redux/auth/authOperation';
import {
  Container,
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  Link,
} from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
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
          <Avatar
            color="primary"
            sx={{
              m: 1,
              bgcolor: 'secondary',
            }}
          ></Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={handleChange}
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: grey[400],
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  href="/goit-react-hw-08-phonebook/register"
                  variant="body2"
                  underline="hover"
                  sx={{
                    color: grey[500],
                    '&:hover': {
                      color: 'secondary.main',
                      contrastText: 'secondary.contrastText',
                    },
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
