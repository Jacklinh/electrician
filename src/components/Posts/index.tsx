
import styles from './Posts.module.css';
import { postList } from '../../data/postList';

type SinglePostType = {
    image: string,
    title: string,
    link: string,
    date: string,
    desc: string,
}
const SinglePost = ({post}:{post: SinglePostType}) => {
    return (
        <article>
            <img className={styles.photo} alt="" src={post.image} />
            <div className={styles.content}>
                <h3><a href={post.link}>{post.title}</a></h3>
                <div className={styles.dates}>
                    {post.date}
                </div>
                <p className={styles.section_desc}>
                    {post.desc}
                </p>
                <div className={styles.section_btn}>
                    <a className={styles.readmore} href={post.link}>Read more</a>
                </div>
            </div>
        </article>
    )
}
const Posts = () => {
    return (
        <div className={styles.article_list}>
           {
            postList.map((item) => <SinglePost key={`SinglePost_${item.id}`} post={item} />)
           }
        </div>
    )
}

export default Posts