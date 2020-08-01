import React, {useState, useEffect} from "react"
import axios from 'axios'
import Post from "./Post"

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  gridList: {
    width: 500,
    height: 600
  },
}));

function PostList (){
    const classes = useStyles();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(response => setPosts(response.data));
      }, []);

    const postList = posts.length === 0 ? "No posts yet..." : (

        posts.map(post => { 
            return(
                <div>
                    <GridListTile cols={1}>
                        <Post key={post.id} post={post}/>
                    </GridListTile>
                </div>
            )
        })
    )


    return(
        <div>
            <h2>Posts</h2>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={1}>
                    {postList}
                </GridList>
            </div>
        </div>
    )
}

export default PostList