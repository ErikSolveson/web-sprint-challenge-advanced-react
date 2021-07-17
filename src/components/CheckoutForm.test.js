import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// import * as rtl from "react-testing-library";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  //   screen.debug();
  const header = screen.getByText(/Checkout Form/i); //this is the string in the header of the checkout form
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  //enter all form data
  const first = screen.getByLabelText(/first name/i);
  userEvent.type(first, "erik");
  const last = screen.getByLabelText(/last name/i);
  userEvent.type(last, "Vader");
  const address = screen.getByLabelText(/address/i);
  userEvent.type(address, "123 south");
  const city = screen.getByLabelText(/city/i);
  userEvent.type(city, "missoula");
  const state = screen.getByLabelText(/state/i);
  userEvent.type(state, "MT");
  const zip = screen.getByLabelText(/zip/i);
  userEvent.type(zip, "65423");

  //click the button
  const button = screen.getByRole("button");
  userEvent.click(button);

  //check to see if the popup text is rendered
  const sucsessMessagePopup = screen.getByText(/You have ordered some plants/i);
  expect(sucsessMessagePopup).toBeInTheDocument();
  screen.debug();
});
