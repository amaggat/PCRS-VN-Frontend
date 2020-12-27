import React, { useState, useEffect } from "react";
import ProfileService from "../../Client/ProfileService";
import avatar from "./avatar.png";
import "./Build.css";

const Feedback = ({ buildId }) => {
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    ProfileService.getPostsbyID(buildId)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err.toString()));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    ProfileService.postFeedback(buildId, comment)
      .then(() => {
        fetchPosts();
      })
      .catch((err) => console.log(err.toString()));
    setComment("");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="build-container feedback">
      <div className="section-title">Comment</div>
      <div className="content">
        <form onSubmit={handleSubmit} className="input text-center">
          <input
            class="form-control form-control-sm"
            type="text"
            value={comment}
            placeholder="Type your anonymous comment HERE"
            onChange={handleCommentChange}
          />
        </form>
        <div className="feedbacks">
          {posts.map((post) => {
            const date = new Date(post.creationtime);
            return (
              <>
                <div className="profile row">
                  <div className="avatar-container">
                    <img src={avatar} alt="anonymous" />
                  </div>
                  <div className="user">
                    <div className="row username">Anonymous</div>
                    <div className="row time">{date.toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="context">{post.details}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
