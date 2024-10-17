import { useState } from "react";
import { programsInfo } from "../data/programsInfo";
import ProgramAccordion from "./ProgramAccordion";

const Zero2Hero = () => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <div className="w-full px-2 flex flex-col gap-2 ">
      {programsInfo.map((step) => (
        <ProgramAccordion
          key={step.title}
          step={step}
          toggled={step.title === open}
          onShow={handleClick}
        />
      ))}
    </div>
  );
};

export default Zero2Hero;
