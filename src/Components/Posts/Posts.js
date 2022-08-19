import React from 'react';
import { communities, stories, users } from '../../Data/Data';
import Post from '../Post/Post';
import Profile from '../Profile/Profile';
import './Posts.css';

const Posts = () => {
    const posts=stories;
    const totalUsers=users;
    const totalCommunities=communities;
    // console.log(posts);
    let key=1;
    return (

        <div className="paddingAndMargin">
            <h3>Amazing authors to follow</h3>
            {
                totalUsers.map(user=> <Profile singleUser={user}></Profile>)
            }
            <div className="text-black ">
            {
                posts.map(post=><Post postContent= {post} key={key}></Post>)
            }
            </div>
            <h3>Amazing communities to follow</h3>
            {
                totalCommunities.map(communitie=> <Profile singleUser={communitie}></Profile>)
            }
        </div>
    );
};

export default Posts;