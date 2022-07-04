import { useSelector } from "react-redux";
//components
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButton";
//selectors
import { selectAllPosts } from "./postsSlice";

export function PostList() {
  //   const posts = useSelector((state) => state.posts.posts);
  const posts = useSelector(selectAllPosts);

  //no se puede mutar el state(redux-toolkit)
  const orderedPosts = [...posts]
    //.slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
}
