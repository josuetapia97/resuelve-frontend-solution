import React from 'react';
import Pelicula from './Pelicula';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        flexWrap:'wrap'
    }
  }));



export default function Contenido(){
    
      const classes = useStyles();
      const [peliculas, setPeliculas] = React.useState([]);
      const [isLoading, setLoading] = React.useState(true);
      
      React.useEffect(()=>{
          
          const fetchData = async()=>{
            const url = 'https://ghibliapi.herokuapp.com/films'
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setPeliculas(json);
            setLoading(false);
          } 
          try {
            fetchData();
          } catch (error) {
              console.log(error);
          }

      },[])

    return (isLoading)?
    (
        <div>
            Está cargando el Contenido
        </div>
    ):
        (
        <div className={classes.container}>
            {peliculas.map((pelicula,index)=>
            (<Pelicula 
            key={index}
            title={pelicula.title}
            description={pelicula.description}
            director={pelicula.director}
            release_date={pelicula.release_date}
            className={classes.container} />)
          )}
        </div>
    )
}