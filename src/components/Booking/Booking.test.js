import { fireEvent, render, screen } from "@testing-library/react";
import Booking, { GROUP_SIZE_MIN, GROUP_SIZE_MAX } from './Booking';
import { fetchAPI } from "../../api/api";
import { getCurrentLocalDate } from "../../Util";
import { MemoryRouter } from 'react-router-dom';

const goToPersonalForm = () => {
  // Just click next as form is prefilled with default values
  const button = screen.getByText("Next");
  fireEvent.click(button);
};

test('Renders the Booking heading', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Tests date picker reject past dates', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  const testDate = "1990-12-31";
  const yesterday = (new Date(getCurrentLocalDate() - 86400000)).toISOString().split("T")[0];
  let inputElement = screen.getByLabelText("Date");
  let errorElement = inputElement.nextElementSibling;
  // Test a specific date in the past
  fireEvent.change(inputElement, { target: { value: testDate } });
  expect(errorElement).toHaveTextContent("Date cannot be in the past");
  // Test date of yesterday
  fireEvent.change(inputElement, { target: { value: yesterday } });
  expect(errorElement).toHaveTextContent("Date cannot be in the past");
});

test('Tests initializeTimes to return expected availableTimes', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  let inputElement = screen.getByLabelText("Date");
  const currDate = getCurrentLocalDate().toISOString().split("T")[0];
  expect(inputElement).toHaveValue(currDate);
  inputElement = screen.getByLabelText("Time");
  expect(inputElement).toHaveTextContent(fetchAPI(new Date(currDate)).join(""));
});

test('Tests updateTimes to return expected availableTimes', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  const testDate = "2023-01-01";
  let inputElement = screen.getByLabelText("Date");
  fireEvent.change(inputElement, { target: { value: testDate } });
  inputElement = screen.getByLabelText("Time");
  expect(inputElement).toHaveTextContent(fetchAPI(new Date(testDate)).join(""));
});

test('Tests first name input validation', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  goToPersonalForm();
  let inputElement = screen.getByLabelText("First Name");
  let errorElement = inputElement.nextElementSibling;
  fireEvent.change(inputElement, { target: { value: "." } });
  // Empty input, error message = Required
  fireEvent.change(inputElement, { target: { value: "" } });
  expect(errorElement).toHaveTextContent("Required");
  // Valid input
  fireEvent.change(inputElement, { target: { value: "ABC" } });
  expect(errorElement).toHaveTextContent("");
});

test('Tests last name input validation', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  goToPersonalForm();
  let inputElement = screen.getByLabelText("Last Name");
  let errorElement = inputElement.nextElementSibling;
  fireEvent.change(inputElement, { target: { value: "." } });
  // Empty input, error message = Required
  fireEvent.change(inputElement, { target: { value: "" } });
  expect(errorElement).toHaveTextContent("Required");
  // Valid input
  fireEvent.change(inputElement, { target: { value: "ABC" } });
  expect(errorElement).toHaveTextContent("");
});

test('Tests phone number input validation', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  goToPersonalForm();
  let inputElement = screen.getByLabelText("Phone Number");
  let errorElement = inputElement.nextElementSibling;
  // Invalid format
  fireEvent.change(inputElement, { target: { value: "ABC" } });
  expect(errorElement).toHaveTextContent("Invalid phone number");
  // Empty input, error message = Required
  fireEvent.change(inputElement, { target: { value: "" } });
  expect(errorElement).toHaveTextContent("Required");
  // Valid input
  fireEvent.change(inputElement, { target: { value: "+123" } });
  expect(errorElement).toHaveTextContent("");
});

test('Tests email address input validation', () => {
  render(<Booking />, { wrapper: MemoryRouter });
  goToPersonalForm();
  let inputElement = screen.getByLabelText("Email Address");
  let errorElement = inputElement.nextElementSibling;
  // Invalid format
  fireEvent.change(inputElement, { target: { value: "ABC" } });
  expect(errorElement).toHaveTextContent("Invalid email address");
  // Empty input, error message = Required
  fireEvent.change(inputElement, { target: { value: "" } });
  expect(errorElement).toHaveTextContent("Required");
  // Valid input
  fireEvent.change(inputElement, { target: { value: "abc@abc.com" } });
  expect(errorElement).toHaveTextContent("");
});