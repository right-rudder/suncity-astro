import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const QuizModalButton = ({ btnStyle, btnText }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const [pursue, setPursue] = useState(false);
  const [guidance, setGuidance] = useState(false);

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

    const name = formData.get("firstName");
    setUserName(name);

    console.log("Form data:", formData);

    const url =
      "https://services.leadconnectorhq.com/hooks/SmZxqjL2v5KaWPxMSMbW/webhook-trigger/edb78qoSjciDzbiGp39z";

    const MONDAY_API_KEY = import.meta.env.MONDAY_API_KEY;

    const MONDAY_BOARD_ID = 3536260889;

    // Monday.com query
    const mondayQuery = `mutation{
            create_item (board_id: ${MONDAY_BOARD_ID},
            item_name: "${formData.get("firstName") + " " + formData.get("lastName")}",
            column_values: "{\\"lead_email\\": {\\"text\\": \\"${formData.get("email")}\\", \\"email\\": \\"${formData.get("email")}\\"}, \\"lead_phone\\": \\"${formData.get("phone")}\\", \\"long_text\\" : \\"QUIZ FORM. Inspirations: ${formData.get("Inspirations")}, Goals: ${formData.get("goals")}, Experience: ${formData.get("experience")}, Learning Style: ${formData.get("learnstyle")}, Learning Approach: ${formData.get("approach")}, Guidance: ${formData.get("Guidance")}, Comments: ${formData.get("anything-else")}, Visit: ${formData.get("visit-us")}\\"}"
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

    fetch(url, {
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
          }, 6300);
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
        <div id="quiz-modal" className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            {!formSubmitted && (
              <div className="bg-white relative p-12 max-w-xl my-4 text-black h-[99%] rounded-sm-sm overflow-y-auto">
                <p className="text-base text-center font-bold leading-7 text-accent-300 uppercase">
                  QUIZ
                </p>
                <h2 className="text-3xl text-center font-bold mb-1">
                  Is Flight Training for You?
                </h2>
                <p className="text-center italic text-base mt-0 mb-6">
                  Please fill out the form below to get started.
                </p>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      First Name
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      Last Name
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      Email Address
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" />
                    </label>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      Phone Number
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        min={10}
                        max={10}
                        autoComplete="tel"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-8">
                    <fieldset>
                      <legend className="mb-2 text-primary-900 font-semibold">
                        What inspires you to pursue a career as a pilot?{" "}
                        <small>(Check all that apply)</small>
                      </legend>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="passion"
                          name="Inspirations"
                          value={"A passion for adventure"}
                        />
                        <label htmlFor="passion">A passion for adventure</label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="progrow"
                          name="Inspirations"
                          value={"Professional growth and opportunities"}
                        />
                        <label htmlFor="progrow">
                          Professional growth and opportunities
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="hobby"
                          name="Inspirations"
                          value={"Personal hobby"}
                        />
                        <label htmlFor="hobby">Personal hobby</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="other-pursue"
                          name="Inspirations"
                          value={"Other:"}
                          checked={pursue}
                          onChange={() => setPursue(!pursue)}
                        />
                        <label htmlFor="other-pursue">
                          Other <small>(please specify)</small>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  {pursue && (
                    <div className="mb-4">
                      <label
                        htmlFor="pursue-other"
                        className="mb-1 text-primary-900 font-semibold"
                      >
                        Please specify what inspires you to pursue a career as a
                        pilot.
                        <textarea
                          id="pursue-other"
                          name="Inspirations"
                          rows={2}
                          className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        />
                      </label>
                    </div>
                  )}
                  <div className="mb-8">
                    <label
                      htmlFor="goals"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      What are your long-term goals within the aviation
                      industry?
                      <textarea
                        id="goals"
                        name="goals"
                        rows={2}
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-8">
                    <fieldset>
                      <legend className="mb-1 text-primary-900 font-semibold">
                        What is your current level of aviation experience?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="no-experience"
                          name="experience"
                          value="No prior experience with piloting aircraft"
                          required
                        />
                        <label htmlFor="no-experience">
                          No prior experience with piloting aircraft
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="simulator-drone"
                          name="experience"
                          value="Experience with flight simulators or drones"
                          required
                        />
                        <label htmlFor="simulator-drone">
                          Experience with flight simulators or drones
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="flight-training"
                          name="experience"
                          value="Some flight training but haven't soloed yet"
                          required
                        />
                        <label htmlFor="flight-training">
                          Some flight training but haven't soloed yet
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="wants-checkride"
                          name="experience"
                          value="Currently working towards completing a checkride"
                          required
                        />
                        <label htmlFor="wants-checkride">
                          Currently working towards completing a checkride
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-8">
                    <fieldset>
                      <legend className="mb-1 text-primary-900 font-semibold">
                        Which learning style resonates with you the most?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="hands-on"
                          name="learnstyle"
                          value="Hands-on, practical learning"
                          required
                        />
                        <label htmlFor="hands-on">
                          Hands-on, practical learning
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visual"
                          name="learnstyle"
                          value="Visual learning through observation"
                          required
                        />
                        <label htmlFor="visual">
                          Visual learning through observation
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="reading"
                          name="learnstyle"
                          value="Learning through reading and studying materials"
                          required
                        />
                        <label htmlFor="reading">
                          Learning through reading and studying materials
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-8">
                    <fieldset>
                      <legend className="mb-1 text-primary-900 font-semibold">
                        Do you prefer a structured learning environment with
                        clearly defined expectations, or a more flexible,
                        adaptable approach?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="structured"
                          name="approach"
                          value="I prefer a structured approach"
                          required
                        />
                        <label htmlFor="structured">
                          I prefer a structured approach
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="flexible"
                          name="approach"
                          value="I prefer a flexible approach"
                          required
                        />
                        <label htmlFor="flexible">
                          I prefer a flexible approach
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="mb-8">
                    <fieldset>
                      <legend className="mb-2 text-primary-900 font-semibold">
                        What kind of guidance and support would you prefer from
                        your flight instructor?{" "}
                        <small>(Check all that apply)</small>
                      </legend>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="personalized"
                          name="Guidance"
                          value={
                            "A personalized approach tailored to my individual learning needs and preferences"
                          }
                        />
                        <label htmlFor="personalized">
                          A personalized approach tailored to my individual
                          learning needs and preferences
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="hands-on-constant"
                          name="Guidance"
                          value={
                            "Hands-on involvement from the instructor, with constant feedback and guidance"
                          }
                        />
                        <label htmlFor="hands-on-constant">
                          Hands-on involvement from the instructor, with
                          constant feedback and guidance
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="structured-clear"
                          name="Guidance"
                          value={
                            "A structured approach with clear goals and objectives"
                          }
                        />
                        <label htmlFor="structured-clear">
                          A structured approach with clear goals and objectives
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="guidance-confidence"
                          name="Guidance"
                          value={
                            "Supportive and encouraging guidance, with a focus on building confidence"
                          }
                        />
                        <label htmlFor="guidance-confidence">
                          Supportive and encouraging guidance, with a focus on
                          building confidence
                        </label>
                      </div>

                      <div>
                        <input
                          type="checkbox"
                          className="mx-2"
                          id="other-guidance"
                          name="Guidance"
                          value={"Other:"}
                          checked={guidance}
                          onChange={() => setGuidance(!guidance)}
                        />
                        <label htmlFor="other-guidance">
                          Other <small>(please specify)</small>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  {guidance && (
                    <div className="mb-4">
                      <label
                        htmlFor="guidance-other"
                        className="mb-1 text-primary-900 font-semibold"
                      >
                        Please specify the kind of guidance and support you
                        would prefer from your flight instructor.
                        <textarea
                          id="guidance-other"
                          name="Guidance"
                          rows={2}
                          className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        />
                      </label>
                    </div>
                  )}
                  <div className="mb-8">
                    <label
                      htmlFor="winglift"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      Do you know how a wing generates lift?
                      <textarea
                        id="winglift"
                        name="winglift"
                        rows={2}
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="anything-else"
                      className="mb-1 text-primary-900 font-semibold"
                    >
                      Is there anything else you'd like us to know about your
                      interests or expectations regarding flight training?
                      <textarea
                        id="anything-else"
                        name="anything-else"
                        rows={2}
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <fieldset>
                      <legend className="mb-1 text-primary-900 font-semibold">
                        Would you be interested in scheduling a visit to Sun
                        City Aviation Academy?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-yes"
                          name="visit-us"
                          value="visit-yes"
                          required
                        />
                        <label htmlFor="visit-yes">Yes</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-no"
                          name="visit-us"
                          value="visit-no"
                          required
                        />
                        <label htmlFor="visit-no">No</label>
                      </div>
                    </fieldset>
                  </div>
                  <button className="btn-accent mt-8 w-full" type="submit">
                    Submit
                  </button>
                </form>
                <button
                  className="bg-accent-300 p-1 rounded-full absolute top-2 right-2"
                  onClick={() => {
                    toggleModal();
                    document.body.style.overflow = "auto";
                  }}
                >
                  <IoMdClose className="text-2xl text-primary-900" />
                </button>
              </div>
            )}

            {formSubmitted && (
              <div className="bg-white p-12 max-w-xl m-4 text-black rounded-md h-fit overflow-y-auto text-center">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for filling the Quiz.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div className="text-green-700 text-5xl">✓</div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting{" "}
                  <strong>Sun City Aviation Academy</strong>. We are looking
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

export default QuizModalButton;
