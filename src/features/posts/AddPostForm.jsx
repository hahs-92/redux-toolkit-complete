import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
//actions creator
//import { postAdded, addNewPost } from "./postsSlice";
//hooks
import { useAddNewPostMutation } from "./postsSlice";
//selectors
import { selectAllUsers } from "../users/usersSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  //const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  //const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && !isLoading;
  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClicked = async () => {
    //el async se agrega por el await
    if (canSave) {
      try {
        /*
        setAddRequestStatus("pending");
        //unwrap es un metodo de toolkit, que no retorna una promesa
        //con el payload o el error
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        */
        await addNewPost({ title, body: content, userId }).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        // navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
        // } finally {
        //   setAddRequestStatus("idle");
      }
    }
    // if (title && content) {
    //   // dispatch(postAdded({ id: nanoid(), title, content }));
    //   dispatch(postAdded(title, content, userId));
    //   setTitle("");
    //   setContent("");
    // }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
