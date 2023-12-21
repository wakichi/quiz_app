import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import { postDataType, sampleFormType } from "./types";
import axios from "axios";
import endpoint from "./endpoint";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

export default function FormDialog(props: {
  addFunc: (id: number, cont: postDataType) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [isAnswerTrue, setAnswer] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<postDataType>();

  const addHandler = (data: any) => {
    const id: number = data.id;
    const content: postDataType = (({ id, ...rest }) => rest)(data);
    props.addFunc(id, content);
  };
  const onSubmit: SubmitHandler<postDataType> = (data) => {
    axios.post(endpoint, data).then((response) => addHandler(response.data));
    console.log(data);
    reset();
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen} size="large">
        New
        {/* +の形のアイコンボタンにする */}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make New Quiz</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText>
              let's make quiz! you must submit question and can explanation if
              you need
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              type="text"
              fullWidth
              variant="standard"
              {...register("problem")}
            />
            <FormControlLabel
              label={`the answer is ${isAnswerTrue}`}
              control={
                <Checkbox
                  {...register("answer")}
                  onChange={(event) => setAnswer(event.target.checked)}
                />
              }
            ></FormControlLabel>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
