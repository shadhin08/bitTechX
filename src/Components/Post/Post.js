import React from 'react';
import './Post.css';
import coverPhoto from "./../../media/title1.jpg";
import profilePicture from "./../../media/profile.jpg"
import travelLogo from "./../../media/favpng_logo-icon.png";

const Post = (props) => {

    const {content}=props.postContent;

    // console.log(props.key);

    // props.key++;
    let communityName=props.postContent.community.name;
    if(communityName.length>18)
    {
        communityName=communityName.slice(0, 18);
        communityName=communityName+"...";
        // console.log(communityName);
    }
    return (
        <div className='singlePost content'>
            {props.postContent.title&&
            <div className="container bg-white contentTitle">
                <div className="row justify-content-start upperSection">
                    <div className="col-8 titleName">
                        <h5>{props.postContent.title}</h5>

                        <div className="container text-center">
                            <div className="row">
                                <div className="col-auto me-auto d-flex">
                                    <img className="img-fluid profilePicture rounded-circle" src={profilePicture} alt=""></img>
                                    <h6 className="IdName">{props.postContent.author.name}</h6>
                                </div>
                                <div className="col-auto d-flex">
                                    <img className="img-fluid travelLogo" src={travelLogo} alt=""></img>
                                    <h6 className="IdName">{communityName}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 titleImage">
                        <img className="img-fluid" src={coverPhoto} alt=''></img>
                    </div>

                </div>
                <div className="downSection">
                    <p>{props.postContent.created} | {props.postContent.readTime} read <span id="hashtags">{props.postContent.hashtags}</span></p>
                </div>

            </div>
            }

            <div className="contentPost container bg-white contentTitle">
                <div className="upperSection">
                    <p>{content}</p>
                </div>
                <div className="downSection">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            <div className="col-auto me-auto d-flex">
                                    <img className="img-fluid profilePicture rounded-circle" src={profilePicture} alt=""></img>
                                    <h6 className="IdName">{props.postContent.author.name}</h6>
                                </div>
                            </div>
                            <div className="col order-5">
                                <div className="d-flex">
                                    <img className="img-fluid travelLogo" src={travelLogo} alt=""></img>
                                    <h6 className="IdName">{communityName}</h6>
                                </div>
                            </div>
                            <div className="col order-1">
                                <p>{props.postContent.created}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;