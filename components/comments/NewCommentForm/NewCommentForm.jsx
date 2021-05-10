import React, { useState } from 'react';
import { Input, Divider, notification } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import validationSchema from './schema';
import CREATE_COMMENT_FORM_FIELDS from './fields';
import CustomButton from '../../../components/shared/components/Button';

import styles from './NewCommentForm.module.css';

const NewCommentForm = ({ onAddComment }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = handleSubmit(async (data) => {
    const isCreated = await onAddComment(data);

    if (isCreated) {
      setIsFormVisible((p) => !p);
      reset();

      notification.success({
        message: 'Operation completed',
        description: 'Successfully added comment.'
      });
    } else {
      notification.error({
        message: 'Operation failed',
        description: 'Something went wrong while adding a comment.'
      });
    }
  });

  return (
    <section className={styles.formContainer}>
      {isFormVisible && (
        <form onSubmit={onSubmit}>
          <Divider orientation="center">Add Comment</Divider>
          <div className={styles.formContent}>
            <div>
              <Controller
                control={control}
                name={CREATE_COMMENT_FORM_FIELDS.name}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Name"
                  />
                )}
              />
              {errors[CREATE_COMMENT_FORM_FIELDS.name] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_COMMENT_FORM_FIELDS.name]?.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name={CREATE_COMMENT_FORM_FIELDS.email}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Email"
                  />
                )}
              />
              {errors[CREATE_COMMENT_FORM_FIELDS.email] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_COMMENT_FORM_FIELDS.email]?.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name={CREATE_COMMENT_FORM_FIELDS.text}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input.TextArea
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Text"
                    rows={5}
                  />
                )}
              />
              {errors[CREATE_COMMENT_FORM_FIELDS.text] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_COMMENT_FORM_FIELDS.text]?.message}
                </p>
              )}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <CustomButton>Submit comment</CustomButton>
          </div>
        </form>
      )}
      <div className={styles.buttonContainer}>
        <CustomButton
          onClick={() => {
            if (isFormVisible) {
              reset();
            }

            setIsFormVisible((p) => !p);
          }}
        >
          {!isFormVisible ? 'Create comment' : 'Close'}
        </CustomButton>
      </div>
    </section>
  );
};

export default NewCommentForm;
