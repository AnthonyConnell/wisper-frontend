import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [user, setUser] = useState() 

    useEffect(async () => {
        var posts = await fetch("https://wisper-api-71822.herokuapp.com/user/1?withPosts=true");
        console.log(posts)
        .then(response => response.json())
        .then(data => setUser(data.user_id))
    })

    return (
        !Posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;