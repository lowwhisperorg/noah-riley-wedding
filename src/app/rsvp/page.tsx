"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  NextUIProvider,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

export default function RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const [people, setPeople] = useState(0);
  const [inputValues, setInputValues] = useState(
    Array.from({ length: people }, () => "")
  );

  const maxGuests = 5;

  const handlePeopleChange = () => {
    setPeople(people + 1);
    setInputValues((prevValues) => [...prevValues, ""]);
  };

  const handleRemovePerson = (index: number) => {
    setPeople(people - 1);
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues.splice(index, 1);
      return newValues;
    });
  };

  const handleChange = (e: { target: { value: any } }, index: number) => {
    const { value } = e.target;
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log(formData);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => setIsSubmitted(true))
      .catch((error) => {
        setIsError(true);
        setError(error);
      });

    setIsSubmitted(true);
  };

  return (
    <NextUIProvider>
      <main className="light bg-background text-foreground font-serif">
        <div className="flex flex-col justify-center items-center p-6">
          <Card className="max-w-screen-xs max-h-screen-xs text-foreground bg-background p-6">
            <CardHeader>
              <h1>
                <b>Wedding RSVP</b>
              </h1>
            </CardHeader>
            <CardBody className="font-serif">
              <p className="mb-4">Please fill out the form below to RSVP.</p>
              {!isError && !isSubmitted ? (
                <form
                  className="p-6 shadow-md rounded-md"
                  method="POST"
                  name="rsvp"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="rsvp" />
                  <Input
                    className={"mb-4"}
                    isRequired
                    type="text"
                    name="name"
                    label="Full Name"
                    id="name"
                  />
                  <p>
                    We will be doing a pot luck. If you plan on bringing a dish,
                    please list it below:
                  </p>
                  <Input
                    className={"mb-4"}
                    type="text"
                    name="dish"
                    label="Dish Name"
                    id="dish"
                  />

                  <div>
                    <p>
                      Additional Guests: {people}/{maxGuests}
                    </p>

                    {people > 0 ? (
                      inputValues.map((value, index) => (
                        <div
                          key={index}
                          className={
                            "flex flex-row justify-center items-center pb-3"
                          }
                        >
                          <p className="w-28 text-sm">Guest {index + 1}</p>
                          <Input
                            isRequired
                            type="text"
                            value={value}
                            label={"Full Name"}
                            className="mr-3"
                            id={String(index + 1)}
                            name={"Guest " + String(index + 1)}
                            onChange={(e) => handleChange(e, index)}
                          />
                          <Button
                            isIconOnly
                            size={"sm"}
                            className="flex"
                            color={"secondary"}
                            onClick={() => handleRemovePerson(index)}
                          >
                            <ClearIcon />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}

                    <div className={"flex mt-4 justify-end items-center"}>
                      <Button
                        className={"m-2"}
                        color={"primary"}
                        isDisabled={people > maxGuests - 1 ? true : false}
                        onClick={handlePeopleChange}
                        endContent={<AddIcon />}
                      >
                        Add Guest
                      </Button>
                    </div>
                  </div>

                  <Button
                    variant="shadow"
                    color="primary"
                    type="submit"
                    className="mt-4 text-foreground"
                  >
                    RSVP
                  </Button>
                </form>
              ) : (
                <></>
              )}
              {isError && (
                <center>
                  <p className="p-6">
                    There was an error submitting your form. Please try again
                    later.
                  </p>
                </center>
              )}
              {isSubmitted && (
                <center>
                  <p className="p-6">
                    Thank you for your RSVP! We look forward to seeing you!
                  </p>
                </center>
              )}
            </CardBody>
          </Card>
        </div>
      </main>
    </NextUIProvider>
  );
}
