import { useDispatch, useSelector } from 'react-redux';
import { FiUser } from "react-icons/fi";
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css'
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);

    const onDelete = e => {
        const id = e.target.id;
        dispatch(deleteContact(id));
    };

    return (
       <ul className={css.list}>
            {contacts.map(contact => (
            <li className={css.list_item} key={contact.id}>
                <p className={css.list_name}>
                        <FiUser size={20} className={css.icon} />
                        {contact.name}: <span className={css.list_number}>{contact.phone}</span>
                </p>
                <button
                    type="button"
                    onClick={onDelete}
                    className={css.list_btn}
                    id={contact.id}
                >
                Delete
                </button>
            </li>
            ))}
        </ul>
    );
}

export default ContactList;