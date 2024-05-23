import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to Story Speak Blog
        </h1>
        <p className="text-gray-500 text-lg sm:text-sm">
          Welcome to our Story spaeks blog, where every word weaves a new world
          and every narrative is a journey worth taking. Our blog is a tapestry
          of diverse tales, meticulously crafted to cater to every kind of
          reader. Whether you are here to get lost in a fantastical realm, to
          find solace in heartfelt memoirs, or to gain insights from real-life
          experiences, our stories are designed to captivate, inspire, and
          resonate
          <br />
          <br />
          Our mission is to create a vibrant community of storytellers and
          readers who believe in the power of stories to connect, heal, and
          transform. We aim to offer a platform where voices from all walks of
          life can be heard, and where every reader can find a story that speaks
          to them.
          <br />
          <br />
          Dive into a world of imagination with our collection of fiction
          stories. From thrilling mysteries and gripping dramas to enchanting
          fantasies and speculative science fiction, our fiction section
          promises to transport you to places beyond your wildest dreams.
          <br />
          <br />
          We invite you to explore our diverse range of stories and to become a
          part of our community. Whether you’re an avid reader, an aspiring
          writer, or simply someone who loves a good story, there’s a place for
          you here. Share your thoughts in the comments, submit your own
          stories, and connect with fellow storytellers and readers.
        </p>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
