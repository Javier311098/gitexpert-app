import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((cate) => [inputValue, ...cate]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Busca un gif"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
