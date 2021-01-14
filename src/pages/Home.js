import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
//heh... penis

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
    export function Home() {
    const classes = useStyles();
    const routes = useSelector(state => state.routes)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                    {
                        routes.map((route, index) => (
                            <Grid item xs={12} sm={9} md={6} lg={3} xl={2} component={Link} to={route.path} key={index} >{route.img}</Grid>
                        ))
                    }
            </Grid>
        </div>
    );
}