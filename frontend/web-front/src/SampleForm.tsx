import { useForm, SubmitHandler } from "react-hook-form";
import { postDataType, sampleFormType } from "./types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const SampleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<postDataType>();

  const onSubmit: SubmitHandler<postDataType> = (data) => {
    // const endpoint = "http://localhost:8000/api/quiz/"
    // axios.post(endpoint,data).then(response=>{console.log(response)})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("problem")} />
      <input
        {...register("answer", {
          required: true,
          maxLength: 20,
        })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default SampleForm;
