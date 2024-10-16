import { FaPlus, FaMinus } from "react-icons/fa6";

const ProgramAccordion = ({ step, toggled, onShow }) => {
  return (
    <div className="flex flex-col items-start rounded lg:py-3 bg-gradient-to-r from-muted-50 to-accent-50">
      <button
        id={step.title}
        onClick={onShow}
        type="button"
        className={`w-full px-4 py-3 flex items-center justify-between`}
      >
        <h4 className="font-bold text-base md:text-xl text-muted-800">
          {step.title}
        </h4>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <ul
        className={`overflow-hidden text-black ${
          toggled ? "max-h-screen" : "max-h-0"
        } transition-[max-height] duration-500 ease-in-out }`}
      >
        <li className="bg-white py-6 px-4 overflow-y-auto">
          <p className="mb-2">{step.content}</p>
          {step.content2 && <p className="mb-6">{step.content2}</p>}
          <br />
          {step.linkTo && (
            <a href={step.linkTo.url} className="btn-accent">
              {step.linkTo.title}
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProgramAccordion;
