import { Component } from "react";
import PostItem from "../PostItem/PostItem";
import "./InstaPost.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class InstaPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      apiStatus: apiStatusConstants.initial,
    };
  }

  componentDidMount() {
    this.getInstaPost();
  }

  renderInstaPostLoaderView = () => {
    return <h2>Pending...</h2>;
  };

  renderInstaPostFailureView = () => {
    return (
      <div>
        <img
          src="https://media.gettyimages.com/id/1451783304/vector/404-page.jpg?b=1&s=170667a&w=0&k=20&c=Id_qleimXb29S11I7hriGlK8SeeDbkmyLvFXrYBaUPI="
          alt=""
        />
        <p>Something went Wrong </p>
        <button onClick={this.getInstaPost}>Try Again</button>
      </div>
    );
  };

  renderInstaPostSuccessView = () => {
    return this.state.allPosts.map((post) => (
      <PostItem key={post.id} post={post} />
    ));
  };

  renderInstaPostSwitch() {
    switch (this.state.apiStatus) {
      case apiStatusConstants.success:
        return this.renderInstaPostSuccessView();
      case apiStatusConstants.inProgress:
        return this.renderInstaPostLoaderView();
      case apiStatusConstants.failure:
        return this.renderInstaPostFailureView();
      default:
        return <h1>Loaded Data</h1>;
    }
  }

  getInstaPost = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const url =
      "https://pixabay.com/api/?key=43164716-ffa6def00cce32f090a947347&q=yellow+flowers&image_type=photo";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          allPosts: data.hits,
          apiStatus: apiStatusConstants.success,
        });
      } else {
        throw new Error(`Failed to get response from ${url}`);
      }
    } catch (error) {
      this.setState({ apiStatus: apiStatusConstants.failure });
      console.error(error);
    }
  };

  render() {
    return <div className="instaPost">{this.renderInstaPostSwitch()}</div>;
  }
}

export default InstaPost;
