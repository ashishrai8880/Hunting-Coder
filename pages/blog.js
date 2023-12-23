import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.result);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.metadesc.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  
  const data =await fetch('http://localhost:3000/api/blog') ;
  const result = await data.json();

  return { props:  {result} }
}
