import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../users/usersSlice";
import { selectAllPosts } from "../posts/postsSlice";

export const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  //   const {
  //     data: postsForUser,
  //     isLoading,
  //     isSuccess,
  //     isError,
  //     error,
  //   } = useGetPostsByUserIdQuery(userId);

  //   let content;
  //   if (isLoading) {
  //     content = <p>Loading...</p>;
  //   } else if (isSuccess) {
  //     const { ids, entities } = postsForUser;
  //     content = ids.map((id) => (
  //       <li key={id}>
  //         <Link to={`/post/${id}`}>{entities[id].title}</Link>
  //       </li>
  //     ));
  //   } else if (isError) {
  //     content = <p>{error}</p>;
  //   }

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
      {/* <ol>{content}</ol> */}
    </section>
  );
};
