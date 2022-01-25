import React , {useState ,useEffect} from 'react'
import "./feed.css";
import StoryReel from '../storyReel/storyReel';
import PostSender from '../postSender/postSender';
import Post from '../post/post';
import db from '../../firebase'
const Feed = () =>   {
    const [posts , setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id : doc.id , data : doc.data()})))
        ))
    } , [])
    return (
        <div className = "feed">
            <StoryReel />
            <PostSender/>
            {posts.map(post => (
                <Post 
                key = {post.data.id}
                profilePic = {post.data.profilePic}
                message = {post.data.message}
                timestamp = {post.data.timestamp}
                username = {post.data.username}
                image = {post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed;
