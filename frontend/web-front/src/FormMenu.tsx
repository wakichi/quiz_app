import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import{useForm, SubmitHandler} from "react-hook-form"
import {postDataType, sampleFormType} from "./types"
import axios from "axios";

import Checkbox from '@mui/material/Checkbox';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const{
    register,
    handleSubmit,
    reset,
    formState:{errors},
    }= useForm<postDataType>();

    const onSubmit:SubmitHandler<postDataType> = (data)=>{
        const endpoint = "http://localhost:8000/api/quiz/"
        axios.post(endpoint,data).then(response=>{console.log(response)})
        console.log(data)
        reset()
    }

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
                    let's make quiz! you must submit question and can explanation if you need
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
                <Checkbox {...register("answer")}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} type="submit">Subscribe</Button>
            </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}