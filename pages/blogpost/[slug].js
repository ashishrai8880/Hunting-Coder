import React , {useState , useEffect} from "react";
import { useRouter  } from "next/router";
import styles from '../../styles/BlogPost.module.css' 

const Slug = () => {
    const [blogData, setblogData] = useState();

  // console.log('route query : ',router.query)
  // console.log('slug : ',slug)

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    
    if(!router.isReady) return ;
    
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
    }).then((parsed)=>{
      setblogData(parsed);
      console.log(blogData)
    })
  }, [router.isReady])
    

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          { blogData ? blogData.data.content : ''}
        </div>
      </main>
    </div>
  );
};

export default Slug;
