import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const BookModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleModal = () => {
    console.log(btnStyle);
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("first-name");
    setUserName(name);

    console.log("Form data:", formData);

    const GHL_BOOK_FORM_WEBHOOK_URL =
      import.meta.env.GHL_BOOK_FORM_WEBHOOK_URL ||
      "https://services.leadconnectorhq.com/hooks/SmZxqjL2v5KaWPxMSMbW/webhook-trigger/nNJghJYDO9zZiCHoc82r";

    const MONDAY_API_KEY = import.meta.env.MONDAY_API_KEY;

    const MONDAY_BOARD_ID = 3536260889;

    // Monday.com query
    const mondayQuery = `mutation{
            create_item (board_id: ${MONDAY_BOARD_ID},
            item_name: "${formData.get("firstName") + " " + formData.get("lastName")}",
            column_values: "{\\"lead_email\\": {\\"text\\": \\"${formData.get("email")}\\", \\"email\\": \\"${formData.get("email")}\\"}, \\"lead_phone\\": \\"${formData.get("phone")}\\", \\"long_text\\" : \\"BOOK FORM.\\"}"
          ){
            id
            name
            }
          }`;

    fetch("https://api.monday.com/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: MONDAY_API_KEY,
      },
      body: JSON.stringify({
        query: mondayQuery,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Monday response:", data))
      .catch((err) => console.error("Error:", err));

    fetch(GHL_BOOK_FORM_WEBHOOK_URL, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            toggleModal();
            document.body.style.overflow = "auto";
          }, 5400);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error(
          "Network error occurred while submitting the form:",
          error
        );
      });
  };

  return (
    <>
      <button
        className={btnStyle}
        onClick={() => {
          toggleModal();
          document.body.style.overflow = "hidden";
        }}
      >
        {btnText}
      </button>
      {showModal && (
        <div id="book-modal" className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            {!formSubmitted && (
              <div className="bg-white relative p-12 max-w-3xl my-4 text-black h-[72%] rounded-lg overflow-y-auto">
                <p className="text-base text-center font-bold leading-7 text-accent-300 uppercase">
                  Guide Download
                </p>
                <h2 className="text-3xl text-primary-950 text-center font-bold mb-1">
                  Start Your Journey
                </h2>
                <p className="text-center italic text-base mt-0 mb-6">
                  Please fill out the form below to get started.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 font-light">
                  <div className="flex flex-wrap justify-between">
                    <div className="mb-4 w-full md:w-[48%]">
                      <label
                        htmlFor="first-name"
                        className="block mb-1 font-bold"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        placeholder="John"
                        className="w-full placeholder:text-gray-400 p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                        required
                      />
                    </div>
                    <div className="mb-4 w-full md:w-[48%]">
                      <label
                        htmlFor="last-name"
                        className="block mb-1 font-bold"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        placeholder="Doe"
                        className="w-full placeholder:text-gray-400 p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-1 font-bold">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="123-456-7890"
                      className="w-full placeholder:text-gray-400 p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(
                          /(\d{3})(\d{3})(\d{4})/,
                          "($1) $2-$3"
                        );
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="johndoe@mail.com"
                      className="w-full p-2 border placeholder:text-gray-400 bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                    />
                  </div>

                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" />
                    </label>
                  </p>

                  <button type="submit" className="btn-accent w-full mt-8">
                    Get the guide
                  </button>
                </form>
                <button
                  className="bg-accent-700 p-1 rounded-full absolute top-2 right-2"
                  onClick={() => {
                    toggleModal();
                    document.body.style.overflow = "auto";
                  }}
                >
                  <IoMdClose className="text-2xl text-white" />
                </button>
              </div>
            )}

            {formSubmitted && (
              <div className="bg-white p-12 max-w-2xl m-4 text-black rounded-sm-md h-3/4 overflow-y-auto text-center rounded-xl">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for Downloading Our Guide.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div className="text-green-700 text-5xl">✓</div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting Sun City Aviation. We are looking
                  forward to working with you soon. We will review your message
                  and get back with you within 1-5 business days. <br />
                  <br />
                  You can also give us a call at{" "}
                  <a className="text-red-500" href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </a>{" "}
                  or
                  <br />
                  email us at{" "}
                  <a className="text-red-500" href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookModalButton;
