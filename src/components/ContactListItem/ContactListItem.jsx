import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteContact(id)}
            disabled={isDeleting}
            sx={{ '&:hover': { bgcolor: 'inherit' } }}
          >
            <DeleteIcon
              color="primary"
              sx={{
                color: grey[500],
                '&:hover': { color: '#f32160' },
              }}
            />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText>
          {name}: {number}
        </ListItemText>
      </ListItem>
    </>
  );
};

ContactListItem.propType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
