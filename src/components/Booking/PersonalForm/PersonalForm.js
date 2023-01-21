import styles from "../Booking.module.scss";
import Button from "../../UI/Button/Button";
import FormInput from "../../UI/FormInput/FormInput";
import BookingHeader from "../BookingHeader/BookingHeader";
import { PAGE_INDEX, setInputValue, validateInputValue } from "../Booking";
import { useCallback } from "react";

const placeHolder = {
  fName: "John",
  lName: "Doe",
  phone: "+12345678901",
  email: "john-doe@email.com"
};

const PersonalForm = ({ data, setData, error, setError, setPage }) => {
  const onClick = (e) => {
    // Check inputs
    let isValid = validateInputValue("fName", data.fName, setError);
    isValid &= validateInputValue("lName", data.lName, setError);
    isValid &= validateInputValue("phone", data.phone, setError);
    isValid &= validateInputValue("email", data.email, setError);
    if (isValid) {
      setPage(PAGE_INDEX.CONFIRM);
    }
  };

  const setFirstName = useCallback((e) => {
    const value = e.target.value;
    setInputValue("fName", value, setData);
    validateInputValue("fName", value, setError);
  }, [setData, setError]);

  const setLastName = useCallback((e) => {
    const value = e.target.value;
    if (validateInputValue("lName", value, setError)) {
      setInputValue("lName", value, setData);
    }
  }, [setData, setError]);

  const setPhone = useCallback((e) => {
    const value = e.target.value;
    setInputValue("phone", value, setData);
    validateInputValue("phone", value, setError);
  }, [setData, setError]);

  const setEmail = useCallback((e) => {
    const value = e.target.value;
    setInputValue("email", value, setData);
    validateInputValue("email", value, setError);
  }, [setData, setError]);

  return (
    <>
      <BookingHeader subTitle="Personal Details" goBack={() => setPage(PAGE_INDEX.BOOKING)} />
      <form className={styles.form}>
        <FormInput
          type="text"
          id="bookingForm-fName"
          label="First Name"
          placeholder={"e.g. " + placeHolder.fName}
          value={data.fName}
          error={error?.fName}
          onChange={setFirstName}
        />
        <FormInput
          type="text"
          id="bookingForm-lName"
          label="Last Name"
          placeholder={"e.g. " + placeHolder.lName}
          value={data.lName}
          error={error?.lName}
          onChange={setLastName}
        />
        <FormInput
          type="tel"
          id="bookingForm-phone"
          label="Phone Number"
          placeholder={"e.g. " + placeHolder.phone}
          value={data.phone}
          error={error?.phone}
          onChange={setPhone}
        />
        <FormInput
          type="email"
          id="bookingForm-email"
          label="Email Address"
          placeholder={"e.g. " + placeHolder.email}
          value={data.email}
          error={error?.email}
          onChange={setEmail}
        />
        <Button primary wide onClick={onClick}>Next</Button>
      </form>
    </>
  );
};

export default PersonalForm;