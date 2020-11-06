import React from "react";
import { render, fireEvent, screen, getByRole } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, {target: {value: "heather"}});
    fireEvent.change(lastNameInput, {target: {value: "beckman"}});
    fireEvent.change(addressInput, {target: {value: "5555 Elm"}});
    fireEvent.change(cityInput, {target: {value: "Nowhere"}});
    fireEvent.change(stateInput, {target: {value: "California"}});
    fireEvent.change(zipInput, {target: {value: "55555"}});

    const submitButton = screen.getByRole("button", {type: /submit/i});
    fireEvent.click(submitButton);

    const orderComformation = screen.getByText("Your new green friends will be shipped to:");
    const orderInfo = screen.getByText("heather beckman");
});
