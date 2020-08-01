import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginTop: 10,
    },
  });

function Post(props){
    const classes = useStyles();

    return (
        <Card className={classes.root} key={props.post.id}>
          <CardContent>
            <Typography className={classes.title}>
                {props.post.title}
            </Typography>
            <Typography className={classes.pos}>
                {props.post.body}
            </Typography>
          </CardContent>
        </Card>
    )
}

export default Post


