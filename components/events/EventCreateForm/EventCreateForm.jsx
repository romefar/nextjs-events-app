import moment from "moment";
import { useState } from "react";
import { Input, Divider, DatePicker, notification, Checkbox } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { getRandomCover } from "../../../utils/getRandomImage";
import validationSchema from "./schema";
import CREATE_EVENT_FORM_FIELDS from "./fields";
import CustomButton from "../../shared/components/Button";

import styles from "./EventCreateForm.module.css";

const EventCreateForm = ({ createEvent }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const isCreated = await createEvent({
      ...data,
      date: moment(data.date).toISOString(),
      image: getRandomCover(),
    });

    if (isCreated) {
      setIsFormVisible((p) => !p);
      reset();

      notification.success({
        message: `Operation completed`,
        description: `Successfully created '${data.title}' event.`,
      });
    } else {
      notification.error({
        message: `Operation failed`,
        description: "Something went wrong while creating an event",
      });
    }
  });

  return (
    <section className={styles.formContainer}>
      {isFormVisible && (
        <form onSubmit={onSubmit}>
          <Divider orientation="center">Create event</Divider>
          <div className={styles.formContent}>
            <div>
              <Controller
                control={control}
                name={CREATE_EVENT_FORM_FIELDS.title}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Event title"
                  />
                )}
              />
              {errors[CREATE_EVENT_FORM_FIELDS.title] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_EVENT_FORM_FIELDS.title]?.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name={CREATE_EVENT_FORM_FIELDS.address}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Address"
                  />
                )}
              />
              {errors[CREATE_EVENT_FORM_FIELDS.address] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_EVENT_FORM_FIELDS.address]?.message}
                </p>
              )}
            </div>
            <div className={styles.twoCol}>
              <div>
              <Controller
                control={control}
                name={CREATE_EVENT_FORM_FIELDS.date}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    onBlur={onBlur}
                    onOk={onChange}
                    value={value}
                    showTime
                    placeholder="Select time for the event"
                  />
                )}
              />
              {errors[CREATE_EVENT_FORM_FIELDS.date] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_EVENT_FORM_FIELDS.date]?.message}
                </p>
              )}
              </div>
               <Controller
                control={control}
                name={CREATE_EVENT_FORM_FIELDS.featured}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Checkbox
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  >
                    Is featured?
                  </Checkbox>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name={CREATE_EVENT_FORM_FIELDS.description}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input.TextArea
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Description of the event"
                    rows={5}
                  />
                )}
              />
              {errors[CREATE_EVENT_FORM_FIELDS.description] && (
                <p className={styles.errorLabel}>
                  {errors[CREATE_EVENT_FORM_FIELDS.description]?.message}
                </p>
              )}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <CustomButton>Create event</CustomButton>
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
          {!isFormVisible ? "Add new Event" : "Close"}
        </CustomButton>
      </div>
    </section>
  );
};

export default EventCreateForm;
