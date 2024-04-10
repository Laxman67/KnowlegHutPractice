import { Component } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

class PostItem extends Component {
  render() {
    const { id, user, largeImageURL, likes, user_id } = this.props.post;
    console.log(this.props.post);
    // TODO remove log
    return (
      <div>
        <p>
          {user} with {likes} likes
        </p>

        <img src={largeImageURL} style={{ width: "200px" }} alt="" />
        <p
          style={{
            padding: "10px 20px ",
            backgroundColor: "pink",
            width: "100px",
          }}
        >
          User Id:{user_id}
        </p>
      </div>
    );
  }
}

export default PostItem;
