import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent"; // Component you'll create for fetching posts

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
