import * as yup from 'yup';
import CREATE_EVENT_FORM_FIELDS from './fields';

const createEventSchema = yup.object().shape({
  [CREATE_EVENT_FORM_FIELDS.title]: yup
    .string()
    .required('Title is required'),
  [CREATE_EVENT_FORM_FIELDS.description]: yup
    .string()
    .required('Description is required'),
  [CREATE_EVENT_FORM_FIELDS.address]: yup
    .string()
    .required('Address is required'),
  [CREATE_EVENT_FORM_FIELDS.date]: yup
    .date()
    .required('Date is required'),
  [CREATE_EVENT_FORM_FIELDS.featured]: yup
    .boolean()
});

export default createEventSchema;
