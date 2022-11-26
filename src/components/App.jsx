import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchField from 'components/SearchField';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: '#010101'
    }}
  >
<Section title="Phonebook:">
<ContactForm />
</Section>
<Section title="Contacts:">
<SearchField />
{isLoading && !error && <b>Request in progress...</b>}
<ContactList />
</Section>
  </div>
);
}