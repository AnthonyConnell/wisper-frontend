import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
//    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [userPosts, setUserPosts] = useState() 

    useEffect(() => {
        const fetchData = async () => { 
            var userPostsRes = await fetch("https://wisper-api-71822.herokuapp.com/user/1?withPosts=true");
            const userPostsJson = await userPostsRes.json();
            console.log(userPostsJson)  
            setUserPosts(userPostsJson);
        }
        fetchData();
    },[])

    return (
        !userPosts ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {userPosts.posts.map((post) => (
                    <Grid key={post.post_id} item xs={12} sm={6}>
                        <Post post={post} author={userPosts.name} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;