import { useSelector } from "react-redux";
//components
import { PostsExcerpt } from "./PostsExcerpt";
//selectors
import {
  selectAllPosts,
  selectPostIds,
  getPostsStatus,
  getPostsError,
  // fetchPosts,
} from "./postsSlice";

export function PostList() {
  const orderedPostIds = useSelector(selectPostIds);
  // const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostsExcerpt key={post.id} post={post} />
    // ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  // se esta realizando el fectch desde el main

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  return <section>{content}</section>;
}
