import React, { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import { TfiPlus } from "react-icons/tfi";
import './Accodian.scss'
export const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div class='accordian-div' onClick={toggle}>
          <p>
          Lorem ipsum dolor sit 
          </p>
          <p>{isActive ? <GiTireIronCross /> : <TfiPlus />} </p>
        </div>
      </div>
      {isActive && (
        <div>
            <p class='accordion-text'>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. 
                Pellentesque nec purus ut massa 
                hendrerit fringilla luctus mattis 
                diam. Integer mollis sollicitudin 
                tincidunt.</p>
        </div>
      )}
    </>
  );
};