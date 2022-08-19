import React from 'react';
import profilePicture from "./../../media/profile.jpg";
import "./Profile.css"

const Profile = (props) => {
    console.log(props.singleUser);
    return (
        <div className="bg-dark profileSection">
            <div className="container text-center">
                            <div className="row">
                                <div className="col-auto me-auto d-flex">
                                    <img className="img-fluid profilePicture rounded-circle" src={profilePicture} alt=""></img>
                                    <h6 className="IdName">{props.singleUser.name} <span id="storiesCount">{props.singleUser.summary.stories} Stories</span></h6>
                                    <br/>
                                </div>
                                <div className="col-auto d-flex">
                                    <h6 className="IdName">{props.singleUser.summary.followers} Followers</h6>
                                    <button className="followButton">Follow</button>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Profile;