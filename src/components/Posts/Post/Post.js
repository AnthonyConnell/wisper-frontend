import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment';
// import { useDispatch } from 'react-redux';

import { likePost, deletePost, sharePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, author, setCurrentId }) => {
  // const dispatch = useDispatch();
  const classes = useStyles();

  // like post
  const likePost = async () => {
    let data = {
      likes: post.likes + 1
    }

    let response = await fetch(`https://wisper-api-71822.herokuapp.com/post/${post.post_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })

    let resJson = await response.json()
    console.log(resJson)
  }

  // share post
  const sharePost = async () => {
    let data = {
      shares: post.shares + 1
    }

    let response = await fetch(`https://wisper-api-71822.herokuapp.com/post/${post.post_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(data)
    })

    let resJson = await response.json()
    console.log(resJson)
  }

  // delete post
  const deletePost = async () => {
    let response = await fetch(`https://wisper-api-71822.herokuapp.com/post/${post.post_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let resJson = await response.json()
    console.log(resJson)
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

      <div className={classes.overlay}>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="body2">{moment(post.date).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post.post_id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>

      <div className={classes.details}>
        {/* <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
      </div>
    
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.body}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => likePost()}><ThumbUpAltIcon fontSize="small" /> {post.likes} Likes </Button>
        <Button size="small" color="primary" onClick={() => sharePost()}><ShareIcon fontSize="small" /> {post.shares} Shares </Button>
        <Button size="small" color="primary" onClick={() => deletePost()}><DeleteIcon fontSize="small" />Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;