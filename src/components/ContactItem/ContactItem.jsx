import PropTypes from 'prop-types';
import { ImPhone, ImUser } from 'react-icons/im';
import {
  DeleteBtn,
  ContactInfo,
  ContactName,
  ContactPhone,
} from './ContactItem.styled';

export function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <ContactInfo>
        <ContactName>
          <ImUser />
          <span>{name}</span>
        </ContactName>
        <ContactPhone>
          <ImPhone />
          {number}
        </ContactPhone>
      </ContactInfo>
      <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};