import styles from "../Booking.module.scss";
import inputStyles from "../../UI/FormInput/FormInput.module.scss";
import Button from "../../UI/Button/Button";
import FormInput from "../../UI/FormInput/FormInput";
import NumberPicker from "../../UI/NumberPicker/NumberPicker";
import BookingHeader from "../BookingHeader/BookingHeader";
import { PAGE_INDEX, GROUPSIZE_LIMIT, setInputValue, validateInputValue } from "../Booking";
import { getCurrentLocalDate } from "../../../Util";
import { fetchAPI } from "../../../api/api";
import { useCallback, useEffect, useState } from "react";

const BookingForm = ({ data, setData, error, setError, setPage, onClickHome }) => {
  // Set default time options for today
  const [availableTimes, setAvailableTimes] = useState([]);
  const updateTimes = (e) => {
    if (e.target.value !== "") {
      return setAvailableTimes(fetchAPI(new Date(e.target.value)));
    }
    else {
      return [];
    }
  };

  // Handle click to validate inputs and update data
  const onClick = (e) => {
    // Check inputs
    let isValid = validateInputValue("date", data.date, setError);
    isValid &= validateInputValue("time", data.time, setError);
    isValid &= validateInputValue("groupSize", data.groupSize, setError);
    if (isValid) {
      setPage(PAGE_INDEX.PERSONAL);
    }
  };

  const setDate = useCallback((e) => {
    const value = e.target.value;
    setInputValue("date", value, setData);
    validateInputValue("date", value, setError);
    updateTimes(e);
  }, [setData, setError]);

  const setTime = useCallback((e) => {
    const value = e.target.value;
    setInputValue("time", value, setData);
    validateInputValue("time", value, setError);
  }, [setData, setError]);

  const setGroupSize = useCallback((e) => {
    setInputValue("groupSize", e, setData);
    validateInputValue("groupSize", e, setError);
  }, [setData, setError]);

  useEffect(() => {
    // Set default selected date to today and time options
    if (data.date === "") {
      // Get local datetime with ISO format
      const currDate = getCurrentLocalDate();
      const availableTimes = fetchAPI(currDate);
      setInputValue("date", currDate.toISOString().split("T")[0], setData);
      setAvailableTimes(availableTimes);
      setInputValue("time", availableTimes[0], setData);
    } else {
      setAvailableTimes(fetchAPI(new Date(data.date)));
    }
  }, [data, setData]);

  return (
    <>
      <BookingHeader subTitle="Booking Details" goBack={onClickHome} />
      <form className={styles.form}>
        <FormInput
          type="date"
          id="bookingForm-date"
          label="Date"
          value={data?.date}
          error={error?.date}
          onChange={setDate}
        />
        <FormInput
          type="select"
          id="bookingForm-time"
          label="Time"
          options={availableTimes}
          value={data?.time}
          error={error?.time}
          onChange={setTime}
        />
        <div className={inputStyles["input-field"]}>
          <label>Group Size</label>
          <NumberPicker
            min={GROUPSIZE_LIMIT.MIN}
            max={GROUPSIZE_LIMIT.MAX}
            value={data?.groupSize}
            error={error?.groupSize}
            onChange={setGroupSize}
          />
        </div>
        <Button primary wide onClick={onClick}>Next</Button>
      </form>
    </>
  );
};

export default BookingForm;