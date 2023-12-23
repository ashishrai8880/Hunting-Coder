import React , {useState , useEffect} from "react";
import { useRouter  } from "next/router";
import styles from '../../styles/BlogPost.module.css' 

const Slug = (props) => {

    const [blogData, setblogData] = useState(props.result.data);
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {blogData.title}</h1>
        <hr />
        <div dangerouslySetInnerHTML={{__html: blogData.content}}>
          {/* { blogData ? blogData.content : ''} */}
        </div>
      </main>
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context){

  const {slug} = context.query
  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`) ;
  const result = await data.json();

  return {
    props : {result}
  }

}
