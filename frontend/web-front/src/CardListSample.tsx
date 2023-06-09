import Grid from '@mui/material/Grid';
import QuizCard from "./QuizCard"
import {DataListType} from "./types"

const CardListSample=(props:{datas:DataListType, delFunc:(id:number)=>void})=>{
    const list = []
    for (const key in props.datas){
      list.push(
        <Grid item xs={6}>
            <QuizCard data={props.datas[key]} id={parseInt(key)} delFunc={props.delFunc}/>
        </Grid>
      )
    }
    return(
        <Grid container spacing={2} xs={8}>
            {list}
        </Grid>
    )
}

export default CardListSample