import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen} size="large">
        New
        {/* +の形のアイコンボタンにする */}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make New Quiz</DialogTitle>
        <form onSubmit={handleClose}>
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
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Explanation"
                type="text"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}