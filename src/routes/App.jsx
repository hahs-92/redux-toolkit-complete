import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
// import { Counter } from "./features/counter/Counter";
import { Layout } from "../components/Layout";
import { SinglePostPage } from "../features/posts/SinglePostPage";
import { PostList } from "../features/posts/PostList";
import { AddPostForm } from "../features/posts/AddPostForm";
import { EditPostForm } from "../features/posts/EditPostForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
