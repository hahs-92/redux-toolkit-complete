import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../users/usersSlice";
//import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";

//hooks
import { useGetPostByUserIdQuery } from "../posts/postsSlice";

export const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  //   CADA VEZ QUE SE EJECUTA UNA ACTION (HEACDER-INCREASE COUNTER)
  //   ESTE COMPONENTE SE RENDERIZA DE NUEVO XQ ESTA VARIABLE DEVULVE UN NUEVO VALOR
  //   A CUASE DEL FILTER

  //   const postsForUser = useSelector((state) => {
  //     const allPosts = selectAllPosts(state);
  //     return allPosts.filter((post) => post.userId === Number(userId));
  //   });

  const {
    data: postsForUser,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetPostByUserIdQuery(userId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  // SELECTPOSTBYUSER ESTA MEOMIZADO
  // const postsForUser = useSelector((state) =>
  //   selectPostsByUser(state, Number(userId))
  // );

  // const postTitles = postsForUser.map((post) => (
  //   <li key={post.id}>
  //     <Link to={`/post/${post.id}`}>{post.title}</Link>
  //   </li>
  // ));

  return (
    <section>
      <h2>{user?.name}</h2>

      {/* <ol>{postTitles}</ol> */}
      <ol>{content}</ol>
    </section>
  );
};
