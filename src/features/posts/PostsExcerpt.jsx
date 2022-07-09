//components
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButton";

export function PostsExcerpt({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      {/* <p>{post.content.substring(0, 100)}</p> */}
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
}
