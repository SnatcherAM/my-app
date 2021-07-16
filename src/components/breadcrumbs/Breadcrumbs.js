import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Breadcrumbs.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CityBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{padding: 10, backgroundColor: 'white', borderRadius: 15, marginTop: 10, marginBottom: 10}}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Украина
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Харьковская область
        </Link>
        <Typography color="textPrimary">Харьков</Typography>
      </Breadcrumbs>
    </div>
  );
}