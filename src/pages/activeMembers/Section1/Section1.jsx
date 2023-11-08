import React from "react";
import Searchform from "./SearchForm";
import { Accordion } from "flowbite-react";

const Section1 = () => {
  return (
    <>
      <div className="w-[80%] mx-auto my-[50px]">
        <Accordion className="border-none rounded-none my-2">
          <Accordion.Panel>
            <Accordion.Title className="text-cstm_secondary_pink-100">
              <p className="text-black text-xl font-normal font-['BR Omega']">
                Advanced Search
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <Searchform />
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default Section1;
