import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperation';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

// // import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { authOperations } from 'redux/auth/authOperation';

// // import React from 'react';
// // import { Formik } from 'formik';

// // const initialValues = {
// //   name: '',
// //   email: '',
// //   password: '',
// // };

// // export const RegisterView = () => {
// //   const dispatch = useDispatch();

// //   const handleSubmit = ({ name, email, password }, { resetForm }) => {
// //     const registerObj = { name, email, password };
// //     dispatch(authOperations.register(registerObj));
// //     resetForm();
// //   };

// //   return (
// //     <div>
// //       <h2>Registration form</h2>

// //       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// //         <form onSubmit={props.handleSubmit}>
// //           <input
// //             type="text"
// //             onChange={props.handleChange}
// //             onBlur={props.handleBlur}
// //             value={props.values.name}
// //             name="name"
// //           />
// //           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
// //           <button type="submit">Submit</button>
// //         </form>
// //       </Formik>
// //     </div>
// //   );
// // };

// //! Anna
// // return (
// //   <Section>
// //     <Container>
// //       <Title>Registration Page</Title>
// //       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// //         <Form autoComplete="off">
// //           <InputWrapper>
// //             <label htmlFor="name">Name</label>
// //             <div>
// //               <Field name="name" type="text" required />
// //             </div>
// //           </InputWrapper>
// //           <InputWrapper>
// //             <LabelStyled htmlFor="email">Email</LabelStyled>
// //             <div>
// //               <Input name="email" type="email" required />
// //             </div>
// //           </InputWrapper>
// //           <InputWrapper>
// //             <LabelStyled htmlFor="password">Password</LabelStyled>
// //             <div>
// //               <Input name="password" type="password" required />
// //             </div>
// //           </InputWrapper>
// //           <Button type="submit" text={'Confirm'} />
// //         </Form>
// //       </Formik>
// //     </Container>
// //   </Section>
// // );

// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';

// // import { SvgIcon } from '@mui/material';
// // import { useDispatch } from 'react-redux';
// // import { authOperations } from 'redux/auth/authOperation';

// // import ReactDOM from 'react-dom';
// // import { useFormik } from 'formik';
// // import * as yup from 'yup';

// // const validationSchema = yup.object({
// //   name: yup
// //     .string('Enter your name')
// //     .name('Enter a valid name')
// //     .required('Name is required'),
// //   email: yup
// //     .string('Enter your email')
// //     .email('Enter a valid email')
// //     .required('Email is required'),
// //   password: yup
// //     .string('Enter your password')
// //     .min(8, 'Password should be of minimum 8 characters length')
// //     .required('Password is required'),
// // });

// // function Copyright(props) {
// //   return (
// //     <Typography
// //       variant="body2"
// //       color="text.secondary"
// //       align="center"
// //       {...props}
// //     >
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       light: '#777777',
// //       main: '#555',
// //       dark: '#3b3b3b',
// //       contrastText: '#fff',
// //     },
// //     secondary: {
// //       light: '#f85b93',
// //       main: '#f73378',
// //       dark: '#ac2354',
// //       contrastText: '#000',
// //     },
// //   },
// // });

// // export function RegisterView() {
// //   const dispatch = useDispatch();

// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     const data = new FormData(e.currentTarget);
// //     dispatch(authOperations.register({ data }));
// //     console.log({
// //       name: data.get('name'),
// //       email: data.get('email'),
// //       password: data.get('password'),
// //     });
// //     console.log({ data });
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Container component="main" maxWidth="xs">
// //         {/* <CssBaseline /> */}
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar
// //             // color="secondary"
// //             sx={{
// //               m: 1,
// //               // bgcolor: 'secondary.main',
// //               contrastText: 'secondary.contrastText',
// //             }}
// //           >
// //             <LockOutlinedIcon color="secondary" />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box
// //             component="form"
// //             noValidate
// //             onSubmit={handleSubmit}
// //             sx={{ mt: 3 }}
// //           >
// //             <Grid container spacing={2}>
// //               <Grid item xs={12}>
// //                 {/* <Grid item xs={12} sm={6}> */}
// //                 <TextField
// //                   autoComplete="given-name"
// //                   name="name"
// //                   required
// //                   fullWidth
// //                   id="name"
// //                   label="Name"
// //                   autoFocus
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               // sx={{ mt: 3, mb: 2 }}
// //               sx={[
// //                 {
// //                   mt: 3,
// //                   mb: 2,
// //                   bgcolor: 'primary.light',
// //                   '&:hover': {
// //                     bgcolor: 'secondary.main',
// //                     contrastText: 'secondary.contrastText',
// //                   },
// //                 },
// //               ]}
// //             >
// //               Sign Up
// //             </Button>
// //             <Grid container justifyContent="flex-end">
// //               <Grid item>
// //                 <Link
// //                   href="#"
// //                   variant="body2"
// //                   color="primary"
// //                   sx={[
// //                     {
// //                       '&:hover': {
// //                         color: '#f73378',
// //                       },
// //                     },
// //                   ]}
// //                 >
// //                   Already have an account? Sign in
// //                 </Link>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //         {/* <Copyright sx={{ mt: 5 }} /> */}
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// //!login anna

// // import { Formik } from 'formik';
// // import { useDispatch } from 'react-redux';
// // import { Button } from 'components/Button/Button';
// // import { Title } from 'components/AppStyled';
// // import { Container, Section } from 'components/AppStyled';
// // import {
// //   FormStyled,
// //   Input,
// //   LabelStyled,
// //   InputWrapper,
// // } from 'components/ContactForm/ContactFormStyled';
// // import { authOperations } from 'redux/auth/authOperations';

// // const initialValues = {
// //   email: '',
// //   password: '',
// // };

// // export const Login = () => {
// //   const dispatch = useDispatch();

// //   const handleSubmit = async ({ email, password }, { resetForm }) => {
// //     const loginObj = { email, password };
// //     dispatch(authOperations.logIn(loginObj));
// //     resetForm();
// //   };

// //   return (
// //     <Section>
// //       <Container>
// //         <Title>Login Page</Title>
// //         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
// //           <Form autoComplete="off">
// //             <InputWrapper>
// //               <label htmlFor="email">Email</label>
// //               <div>
// //                 <Field name="email" type="email" required />
// //               </div>
// //             </InputWrapper>
// //             <InputWrapper>
// //               <LabelStyled htmlFor="password">Password</LabelStyled>
// //               <div>
// //                 <Input name="password" type="password" required />
// //               </div>
// //             </InputWrapper>
// //             <Button type="submit" text={'Confirm'} />
// //           </Form>
// //         </Formik>
// //       </Container>
// //     </Section>
// //   );
// // };
