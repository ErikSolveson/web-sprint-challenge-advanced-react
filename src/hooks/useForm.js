// write your custom hook here to control your checkout form
//custom hook code
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};
