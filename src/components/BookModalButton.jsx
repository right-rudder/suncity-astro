import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const BookModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Clean up body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
    setFormSubmitted(false);
    setSubmitError(null);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    // Format based on length
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.target);

    // Honeypot check
    if (formData.get("confirm-email")) {
      setIsSubmitting(false);
      return;
    }

    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    setUserName(firstName);

    try {
      // Get environment variables with fallbacks
      const GHL_BOOK_FORM_WEBHOOK_URL =
        import.meta.env.PUBLIC_GHL_BOOK_FORM_WEBHOOK_URL ||
        "https://services.leadconnectorhq.com/hooks/SmZxqjL2v5KaWPxMSMbW/webhook-trigger/nNJghJYDO9zZiCHoc82r";

      const MONDAY_API_KEY = import.meta.env.PUBLIC_MONDAY_API_KEY;
      if (!MONDAY_API_KEY) {
        console.warn("Monday API key not found in environment variables");
      }

      const MONDAY_BOARD_ID =
        import.meta.env.PUBLIC_MONDAY_BOARD_ID || 3536260889;

      // Monday.com query
      const mondayQuery = `mutation{
        create_item (board_id: ${MONDAY_BOARD_ID},
        item_name: "${firstName} ${lastName}",
        column_values: "{\\"lead_email\\": {\\"text\\": \\"${email}\\", \\"email\\": \\"${email}\\"}, \\"lead_phone\\": \\"${phone}\\", \\"long_text\\" : \\"BOOK FORM.\\"}"
      ){
        id
        name
        }
      }`;

      // Submit to Monday.com
      const mondayResponse = await fetch("https://api.monday.com/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: MONDAY_API_KEY,
        },
        body: JSON.stringify({ query: mondayQuery }),
      });

      const mondayData = await mondayResponse.json();

      if (
        !mondayResponse.ok ||
        (mondayData.errors && mondayData.errors.length > 0)
      ) {
        throw new Error(
          "Monday.com submission failed: " +
            (mondayData.errors?.[0]?.message || mondayResponse.statusText)
        );
      }

      // Submit to GHL
      const ghlResponse = await fetch(GHL_BOOK_FORM_WEBHOOK_URL, {
        method: "POST",
        body: new URLSearchParams(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!ghlResponse.ok) {
        throw new Error("GHL submission failed: " + ghlResponse.statusText);
      }

      // Success case
      setFormSubmitted(true);
      setTimeout(() => {
        toggleModal();
      }, 5000); // Reduced from 5400ms to 5000ms for better UX
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error.message ||
          "An error occurred during submission. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className={btnStyle}
        onClick={toggleModal}
        aria-label={`Open ${btnText} form`}
      >
        {btnText}
      </button>

      {showModal && (
        <div
          id="book-modal"
          className="relative z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            {!formSubmitted ? (
              <div className="bg-white relative p-12 max-w-3xl my-4 text-black h-[72%] rounded-lg overflow-y-auto">
                <p className="text-base text-center font-bold leading-7 text-accent-300 uppercase">
                  Guide Download
                </p>
                <h2
                  id="modal-title"
                  className="text-3xl text-primary-950 text-center font-bold mb-1"
                >
                  Start Your Journey
                </h2>
                <p className="text-center italic text-base mt-0 mb-6">
                  Please fill out the form below to get started.
                </p>

                {submitError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

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
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="w-full placeholder:text-gray-400 p-2 border bg-gray-100 border-gray-400 rounded focus:outline focus:outline-main-red/50 focus:ring focus:ring-main-red/50 focus:border-main-red/50"
                      required
                      onChange={(e) => {
                        e.target.value = formatPhoneNumber(e.target.value);
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

                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" tabIndex="-1" />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`btn-accent w-full mt-8 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get the guide"}
                  </button>
                </form>

                <button
                  className="bg-accent-700 p-1 rounded-full absolute top-2 right-2"
                  onClick={toggleModal}
                  aria-label="Close modal"
                >
                  <IoMdClose className="text-2xl text-white" />
                </button>
              </div>
            ) : (
              <div className="bg-white p-12 max-w-2xl m-4 text-black rounded-sm-md h-3/4 overflow-y-auto text-center rounded-xl">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for Downloading Our Guide.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div
                      className="text-green-700 text-5xl"
                      role="img"
                      aria-label="Success check mark"
                    >
                      ✓
                    </div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting Sun City Aviation. We are looking
                  forward to working with you soon. We will review your message
                  and get back with you within 1-5 business days. <br />
                  <br />
                  You can also give us a call at{" "}
                  <a
                    className="text-red-500 hover:underline"
                    href={`tel:${PHONE_NUMBER}`}
                  >
                    {PHONE_NUMBER}
                  </a>{" "}
                  or
                  <br />
                  email us at{" "}
                  <a
                    className="text-red-500 hover:underline"
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
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
