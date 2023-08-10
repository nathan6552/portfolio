import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({ selectedCountry, setSelectedCountry }) => {
  const [dropdownText, setDropdownText] = useState("select country");

  const options = [
    { value: "ch", label: "China" },
    { value: "us", label: "US" },
    { value: "fi", label: "Finland" },
    { value: "br", label: "Brazil" },
    { value: "au", label: "Australia" },
    { value: "eg", label: "Egypt" }
  ];

  const customStyles = {
    //This one is the panel on which the options are.
    menu: (provided, state) => ({
      ...provided,
      width: "80%",
      //borderBottom: '1px dotted orange',
      //color: "#fafafa",
      padding: 0,
      backgroundColor: "#FAFAFA",
      opacity: "0.98"
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#222222",
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: "100%",
      width: "120%",
      backgroundColor: "#FAFAFA"
    }),

    placeholder: (provided, state) => ({
      ...provided,
      color: "#DFABFD",
      fontSize: "100%",
      width: "100%"
      //backgroundColor: "#FAFAFA"
    }),

    //This is the wrapper of the whole thing, incls. input + arrow + options
    control: (_, { selectProps: { width } }) => ({
      //width: 200,
      //backgroundColor: 'red',
      padding: 0,
      margin: 0,
      height: 50
    }),
    valueContainer: () => ({
      //float: "left",
      //width: "200%",
      //fontSize: "75%"
    }),

    //This is the small arrow at the edge of the country dropdown menu
    indicatorsContainer: (provided, state) => ({
      float: "left",
      width: "20%",
      position: "absolute",
      right: 0,
      top: "25%"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };

  const handleCountryChange = (selectedOption) => {
    //This takes care of 1) setting the correct country to the App's state 2) switching the dropdown's text.
    setDropdownText(selectedOption.label);
    setSelectedCountry(selectedOption.value);
  };

  return (
    <div>
      <Select
        styles={customStyles}
        value={selectedCountry}
        onChange={(e) => handleCountryChange(e)}
        //defaultValue
        placeholder={dropdownText}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
