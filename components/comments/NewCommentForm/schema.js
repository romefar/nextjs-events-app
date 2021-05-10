import * as yup from 'yup';
import CREATE_COMMENT_FORM_FIELDS from './fields';

const createCommentSchema = yup.object().shape({
  [CREATE_COMMENT_FORM_FIELDS.name]: yup
    .string()
    .required('Name is required'),
  [CREATE_COMMENT_FORM_FIELDS.text]: yup
    .string()
    .required('Description is required'),
  [CREATE_COMMENT_FORM_FIELDS.email]: yup
    .string()
    .email()
    .required('Email is required')
});

export default createCommentSchema;
