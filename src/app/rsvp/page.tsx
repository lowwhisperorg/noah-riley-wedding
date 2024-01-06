"use client"
import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    NextUIProvider,
    Radio,
    RadioGroup,
    Select,
    SelectItem
} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {isError} from "node:util";
import AddIcon from '@mui/icons-material/Add';

export default function RSVP() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const [requestType, setRequestType] = useState("website");

    const [people, setPeople] = useState(0);
    const [inputValues, setInputValues] = useState(Array.from({length: people}, () => ''));


    const handlePeopleChange = () => {
        setPeople(people + 1);
        setInputValues((prevValues) => [...prevValues, '']);
    }

    const handleRemovePerson = (index: number) => {
        setPeople(people - 1);
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues.splice(index, 1);
            return newValues;
        });
    };

    const handleChange = (e: { target: { value: any; }; }, index: number) => {
        const {value} = e.target;
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

        fetch('/', {
            method: 'POST',
            body: formData,
        })
            .then(response => setIsSubmitted(true))
            .catch(error => {
                setIsError(true);
                setError(error);
            });

        setIsSubmitted(true)
    };

    return (
        <NextUIProvider>
            <main className="light bg-background text-foreground font-serif">
                <div className="flex flex-col justify-center items-center p-6">
                    <Card className="max-w-screen-xs max-h-screen-xs text-foreground bg-background p-6">
                        <CardHeader>
                            <h1><b>Wedding RSVP</b></h1>
                        </CardHeader>
                        <CardBody className="font-serif">
                            <p>
                                Please fill out the form below to RSVP.
                            </p>
                            {!isError && !isSubmitted ?
                                <form className="p-6" method="POST" name="contact" data-netlify="true"
                                      onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="rsvp"/>
                                    <Input className={""} isRequired type="text" name="name" label="Full Name"
                                           id="name"/>
                                    <p>We will be doing a pot luck. If you plan on bringing a dish, please list it
                                        below:</p>
                                    <Input type="text" name="dish" label="Dish Name" id="dish"/>

                                    <p>Please fill out how many people you plan to bring.</p>
                                    <div>
                                        <p>Additional Guests: {people}/5</p>

                                        {people > 0 ? inputValues.map((value, index) => (
                                            <div key={index} className={"flex flex-row"}>
                                                <p>Guest {index + 1}</p>
                                                <Input
                                                    type="text"
                                                    value={value}
                                                    label={"Full Name"}
                                                    onChange={(e) => handleChange(e, index)}
                                                />
                                                <Button className="m-2" color={"secondary"} onClick={() => handleRemovePerson(index)}>
                                                    Remove
                                                </Button>

                                            </div>
                                        )) : <></>}
                                        <div className={"flex mt-4 justify-end items-center"}>
                                            <Button
                                                    className={"m-2"}
                                                    color={"primary"} isDisabled={people > 4 ? true : false}
                                                    onClick={handlePeopleChange}
                                                    endContent={<AddIcon/>}
                                            >Add Guest</Button>
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
                                : <></>}
                            {isError &&
                                <center><p className="p-6">There was an error submitting your form. Please try again
                                    later.</p></center>}
                            {isSubmitted &&
                                <center><p className="p-6">Thank you! I will get back to you soon.</p></center>}
                        </CardBody>
                    </Card>
                </div>
            </main>
        </NextUIProvider>
    )
}