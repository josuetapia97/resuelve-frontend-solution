import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontSize:40
  },
  search: {
    position: 'relative',
    //borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '50%'
  },
  textSearch:{
    width: '97%',
    padding:5
    
  },
  searchIcon: {
    //padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          Ghibli films 
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div style={{padding:10}}>
            <Autocomplete
                freeSolo
                id="auto-complete-id"
                disableClearable
                options={["pelicula1","pelicula2"]}
                style={{paddingLeft:15}}
                renderInput={(params) => (
                <TextField
                    className={classes.textSearch}
                    {...params}
                    label="Buscar pelicula"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
                )}
            />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
