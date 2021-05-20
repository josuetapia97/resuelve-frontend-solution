import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
   width:'20%',
   margin: 10,
   padding:10,
   position:'relative',
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 14,
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
  }
})
export default function Pelicula(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} >
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
      </CardContent>
    </Card>
  );
}
