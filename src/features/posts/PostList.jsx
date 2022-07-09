import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//components
import { PostsExcerpt } from "./PostsExcerpt";
//selectors
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";

export function PostList() {
  const dispatch = useDispatch();
  //   const posts = useSelector((state) => state.posts.posts);
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  /*
  //no se puede mutar el state(redux-toolkit)
  const orderedPosts = [...posts]
    //.slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <PostExcerpt key={post.id} post={post} />
  ));
  */

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  return (
    <section>
      <h2>Posts</h2>
      {/* {renderPosts} */}
      {content}
    </section>
  );
}
