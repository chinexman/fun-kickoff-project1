import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleSubmit: (
    {
      firstname,
      lastname,
      gender,
      birthdate,
      email,
      phoneno,
      whereyoulive,
      describeyourself,
    }: {
      firstname: string;
      lastname: string;
      gender: string;
      birthdate: string;
      email: string;
      phoneno: string;
      whereyoulive: string;
      describeyourself: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      firstname: string;
      lastname: string;
      gender: string;
      birthdate: string;
      email: string;
      phoneno: string;
      whereyoulive: string;
      describeyourself: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        gender: '',
        birthdate: '',
        email: '',
        phoneno: '',
        whereyoulive: '',
        describeyourself: '',
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required('FirstName is required'),
        lastname: Yup.string().required('Lastname is required'),
        gender: Yup.string().required('Gender is required'),
        birthdate: Yup.string().required('Birthdate is required'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        phoneno: Yup.string().required('Phone number is required'),
        whereyoulive: Yup.string().required(' Please fill where you live'),
        describeyourself: Yup.string().required('Please give a Detailed description of yourself'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            id="firstname"
            label={<Typography className={classes.label}>First Name</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="firstname"
            autoComplete="firstname"
            autoFocus
            helperText={touched.firstname ? errors.firstname : ''}
            error={touched.firstname && Boolean(errors.firstname)}
            value={values.firstname}
            onChange={handleChange}
          />
          <TextField
            id="lastname"
            label={<Typography className={classes.label}>Last Name</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="lastname"
            autoComplete="lastname"
            autoFocus
            helperText={touched.lastname ? errors.lastname : ''}
            error={touched.lastname && Boolean(errors.lastname)}
            value={values.lastname}
            onChange={handleChange}
          />
          <TextField
            id="gender"
            label={<Typography className={classes.label}>Gender</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="gender"
            autoComplete="gender"
            autoFocus
            helperText={touched.gender ? errors.gender : ''}
            error={touched.gender && Boolean(errors.gender)}
            value={values.gender}
            onChange={handleChange}
          />
          <TextField
            id="birthdate"
            label={<Typography className={classes.label}>Birth Date</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="birthdate"
            autoComplete="birthdate"
            autoFocus
            helperText={touched.birthdate ? errors.birthdate : ''}
            error={touched.birthdate && Boolean(errors.birthdate)}
            value={values.birthdate}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label={<Typography className={classes.label}>E-mail address</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            id="phoneno"
            label={<Typography className={classes.label}>phone No</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="phoneno"
            autoComplete="phoneno"
            autoFocus
            helperText={touched.phoneno ? errors.phoneno : ''}
            error={touched.phoneno && Boolean(errors.phoneno)}
            value={values.phoneno}
            onChange={handleChange}
          />
          <TextField
            id="whereyoulive"
            label={<Typography className={classes.label}>where you live</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="whereyoulive"
            autoComplete="whereyoulive"
            autoFocus
            helperText={touched.whereyoulive ? errors.whereyoulive : ''}
            error={touched.whereyoulive && Boolean(errors.whereyoulive)}
            value={values.whereyoulive}
            onChange={handleChange}
          />
          <TextField
            id="describeyourself"
            label={<Typography className={classes.label}>describe yourself</Typography>}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="describeyourself"
            autoComplete="describeyourself"
            autoFocus
            helperText={touched.describeyourself ? errors.describeyourself : ''}
            error={touched.describeyourself && Boolean(errors.describeyourself)}
            value={values.describeyourself}
            onChange={handleChange}
          />

          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
