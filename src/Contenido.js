import React from 'react';
import Pelicula from './Pelicula';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '@mdi/react';
import { mdiEmoticonCryOutline } from '@mdi/js';
import { mdiBlur } from '@mdi/js';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        flexWrap:'wrap',
        marginTop:70,
        marginLeft:30
    },
    IconNoContent:{
      alignContent:'center',
      textAlign:'center',
      margin:20,
      fontSize:40,
        marginTop:70,
        marginLeft:30
    },
    search: {
      //borderRadius: theme.shape.borderRadius,
      position:'absolute',
      right:10,
      marginTop:-70,
      width: '500px'
    },
    searchInput:{
      padding:5,
    },
    textSearch:{
      width: '97%',
      padding:5
      
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



export default function Contenido(){
    
      const classes = useStyles();
      let peliculasApi=React.useRef([]);
      const [peliculas, setPeliculas] = React.useState([]);
      const [isLoading, setLoading] = React.useState(true);

      React.useEffect(()=>{
          
          const fetchData = async()=>{
            const url = '/films'
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            peliculasApi.current = json;
            setPeliculas(json);
            setLoading(false);
          } 
          try {
            fetchData();
          } catch (error) {
              console.log(error);
          }

      },[])

      const searchMovies = (event) =>{
        let value = event.target.value;
        if(value){
          value=value.toUpperCase();
          const peliculasFilter = peliculasApi.current.filter(pelicula=>{
            const title = pelicula.title.toUpperCase();
            return (title.startsWith(value))?
            true:
            false
          })
          setPeliculas(peliculasFilter);
        }else setPeliculas(peliculasApi.current);
      }

    return (isLoading)?
    (
        <div>
            <Icon path={mdiBlur}
                    title="No content"
                    size={10}
                    horizontal
                    vertical
                    rotate={180}
                    color="black"
                    spin/>
        </div>
    ):
        (
          <div style={{position:'relative'}}>
            <div  className={classes.search}>
              <div  className={classes.searchInput} >
              <Autocomplete
                  freeSolo
                  id="auto-complete-id"
                  disableClearable
                  options={peliculas.map(pelicula=>
                    pelicula.title
                  )}
                  style={{paddingLeft:15}}
                  renderInput={(params) => (
                  <TextField
                      className={classes.textSearch}
                      {...params}
                      label="Buscar pelicula"
                      variant="outlined"
                      onChange={searchMovies}
                      onClick={searchMovies}
                      InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                  )}
              />
              </div>
            </div>
            {(peliculas.length===0)?
                <div className={classes.IconNoContent}>
                  <div>
                    Lo sentimos no tenemos ese contenido
                  </div>
                  <Icon path={mdiEmoticonCryOutline}
                    title="No content"
                    size={10}
                    horizontal
                    vertical
                    rotate={180}
                    color="black"
                    spin={false}/>
                </div>
                :<div className={classes.container}>
                {peliculas.map((pelicula,index)=>
                (<Pelicula 
                key={index}
                title={pelicula.title}
                description={pelicula.description}
                director={pelicula.director}
                release_date={pelicula.release_date}
                running_time={pelicula.running_time}
                />)
              )}
              </div>}
          </div>
    )
}