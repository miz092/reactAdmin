import {
    DateInput,
    DateTimeInput,
    Edit,
    NullableBooleanInput,
    PasswordInput,
    SelectField,
    SelectInput,
    SimpleForm,
    TextInput,
    AutocompleteInput,
    CheckboxGroupInput
} from 'react-admin';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicDatePicker from './BasicDatePicker';

const categories = [
    { id: 'tech', name: 'Tech' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'people', name: 'People' },
    { id: 'food', name: 'Food' },
    { id: 'travel', name: 'Travel' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'health', name: 'Health' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'education', name: 'Education' },
    { id: 'business', name: 'Business' },
    { id: 'finance', name: 'Finance' },
    { id: 'sports', name: 'Sports' },
    { id: 'music', name: 'Music' },
    { id: 'art', name: 'Art' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'science', name: 'Science' },
    { id: 'nature', name: 'Nature' },
    { id: 'books', name: 'Books' },
    { id: 'movies', name: 'Movies' },
    { id: 'games', name: 'Games' }
  ];
const languages = [
    { id: "ab", name: "Abkhaz" },
    { id: "aa", name: "Afar" },
    { id: "af", name: "Afrikaans" },
    { id: "ak", name: "Akan" },
    { id: "sq", name: "Albanian" },
    { id: "am", name: "Amharic" },
    { id: "ar", name: "Arabic" }
  ];
const optionRenderer = (language: any) => `${language.id} ${language.name}`;
const VisitorEdit = () => (
    <Edit>
        <SimpleForm>
        <SelectInput source="languages" choices={languages} optionText={optionRenderer} optionValue='name' />
            <TextInput source="name" isRequired />
            <TextInput source="username" isRequired />
            <TextInput type="email" source="email" isRequired />
            <DateInput source="birthday" />
            {/* <TextInput source="address" multiline /> */}
            <TextInput source="city" />
            <TextInput source="stateAbbr" />
            <TextInput source="zipcode" />
            <AutocompleteInput source="category" choices={categories} />
            <CheckboxGroupInput source="roles" choices={[
    { id: 'admin', name: 'Admin' },
    { id: 'u001', name: 'Editor' },
    { id: 'u002', name: 'Moderator' },
    { id: 'u003', name: 'Reviewer' },
]} />
            <NullableBooleanInput source="has_newsletter" />
        </SimpleForm>
    </Edit>
);
export { VisitorEdit };