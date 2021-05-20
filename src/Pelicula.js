import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
   width:'300px',
   margin: 10,
   padding:10,
   position:'relative',
   transition: theme.transitions.create('box-shadow'),
   '&:hover': {
    backgroundColor: '#d3d3d3',
    cursor:'pointer',
    border: '2px solid black',
    boxShadow: '2px 2px 2px 2px #333'
    }
  },
  description: {
    textAlign:'justify'
  },
  director:{
    width:'50%',
    position:'absolute',
    bottom:0,
    left:0,
    color:'blue'
  },
  release_date:{
    width:'50%',
    position:'absolute',
    bottom:0,
    right:0,
    color:'blue'
  },
  running_time:{
    margin:5
  }
}))
export default function Pelicula(props) {
  const classes = useStyles();

  const timeCalculator = (minutes)=>{
    let time = '';
    const getHoursAndMinutes = minutes =>{
      const hours = ~~(minutes/60)
      minutes = minutes%60
      return `${hours} hr. ${minutes} min.`
    }
    const typeOfMinutes = typeof minutes;
    switch (typeOfMinutes) {
      case 'number':
        time = getHoursAndMinutes(minutes);
        break;
      case 'string':
        minutes = parseInt(minutes);
        time = getHoursAndMinutes(minutes);
        break;
    
      default:
        time = "0 hr. 0 min."
        break;
    }
    return time;
  }

  return (
        <Card className={classes.root}>
      <CardContent>
        <Typography >
        {props.title}
        </Typography>
        <Typography 
          className={classes.description} 
          component='p' 
          color="textSecondary">
        {props.description}
        </Typography>
        <Typography className={classes.director} 
        component='p'>
        {props.director}
        </Typography>
        <Typography className={classes.release_date} 
        component='p'>
        {props.release_date}
        </Typography>
        <Typography className={classes.running_time}
        component='p'>
        Running time: {timeCalculator(props.running_time)}
        </Typography>
      </CardContent>
    </Card>
  );
}
