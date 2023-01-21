import styles from "../Booking.module.scss";
import Button from "../../UI/Button/Button";
import Spinner from "../../UI/Spinner/Spinner";
import BookingHeader from "../BookingHeader/BookingHeader";
import { PAGE_INDEX } from "../Booking";
import { submitAPI } from "../../../api/api";
import { useState } from "react";

/* State for form submission */
const SUBMIT_STATE = {
  READY: 0,
  PENDING: 1,
  SUCCESS: 2,
  FAILED: 3
}

const ConfirmPage = ({ data, setPage, onClickHome }) => {
  const [state, setState] = useState(SUBMIT_STATE.READY);

  const onClickSubmit = (e) => {
    setState(SUBMIT_STATE.PENDING);
    submitAPI(data).then(res => {
      if (res.status === 200) {
        setState(SUBMIT_STATE.SUCCESS);
      }
      else {
        setState(SUBMIT_STATE.FAILED);
      }
    });
  };

  const onClickGoBack = (e) => {
    if (state === SUBMIT_STATE.READY || state === SUBMIT_STATE.FAILED) {
      // Do not allow going back if submission is success or pending
      setPage(PAGE_INDEX.PERSONAL);
    }
  };

  return (
    <>
      <BookingHeader subTitle="Confirmation" goBack={onClickGoBack} />
      <div className={styles.confirm}>
        <BookingSummary data={data} />
        <BookingConfirmStatus state={state} />
        {(state !== SUBMIT_STATE.SUCCESS)
          ? <Button primary wide disabled={state === SUBMIT_STATE.PENDING} onClick={onClickSubmit}>Submit</Button>
          : <Button primary wide onClick={onClickHome}>Home</Button>
        }
      </div>
    </>
  );
};

const BookingSummary = ({ data }) => {
  return (
    <table className={styles["summary-table"]}>
      <tbody>
        <BookingSummaryRow name="Date & Time" value={`${data.date} ${data.time}`} />
        <BookingSummaryRow name="Group Size" value={data.groupSize} />
        <tr className={styles.spacer}></tr>
        <BookingSummaryRow name="Name" value={`${data.fName} ${data.lName}`} />
        <BookingSummaryRow name="Phone Number" value={data.phone} />
        <BookingSummaryRow name="Email Address" value={data.email} />
      </tbody>
    </table>
  );
};

const BookingSummaryRow = ({ name, value }) => {
  return (
    <tr>
      <td>{`${name}`}</td>
      <td>{value}</td>
    </tr>
  );
};

const BookingConfirmStatus = ({ state }) => {
  return (
    <div className={styles["confirm-status"]}>
      {(state === SUBMIT_STATE.READY) && `Click below to submit your reservation.`}
      {(state === SUBMIT_STATE.PENDING) && <Spinner />}
      {(state === SUBMIT_STATE.SUCCESS) && `Your reservation is confirmed. Click below to go back to homepage.`}
      {(state === SUBMIT_STATE.FAILED) && `Something went wrong. Please try again.`}
    </div>
  );
};

export default ConfirmPage;