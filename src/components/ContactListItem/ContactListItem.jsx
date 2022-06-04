import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from '@mui/material/colors';

import { SvgIcon } from '@mui/material';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
      {name}: {number}
      <IconButton
        aria-label="delete"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {/* <DeleteIcon coprimarylor="blue" /> */}
        <HomeIcon color="primary" sx={{ color: blue[900] }} />
      </IconButton>
    </li>
  );
};

ContactListItem.propType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
