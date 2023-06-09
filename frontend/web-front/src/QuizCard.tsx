import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import{postDataType} from "./types"
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";


export default function QuizCard(props:{data:postDataType, id:number,delFunc:(id:number)=>void}) {
    const deleteHandle = (id:number)=>{
        const endpoint = "http://localhost:8000/api/quiz/"
        const endpoint_id =endpoint +id.toString()+"/"
        axios.delete(endpoint_id).then(()=>props.delFunc(id))
    }
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          author
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.data.problem}
        </Typography>
        <Typography variant="body2">
          kaisetu.kaisetu.kaisetu.kaisetu.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>console.log("hoo")}>Yes</Button>
        <Button size="small" onClick={()=>console.log("baa")}>No</Button>
        <IconButton aria-label="delete">
            {/* 押したら変更する機能 */}
            <FavoriteBorderIcon />
        </IconButton>
        <IconButton type="button" onClick={()=>deleteHandle(props.id)}>
                <DeleteIcon />
            </IconButton>
      </CardActions>
    </Card>
  );
}