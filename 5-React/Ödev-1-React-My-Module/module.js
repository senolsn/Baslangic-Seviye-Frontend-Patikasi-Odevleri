import axios from 'axios';

async function getData(userId){
const {data:userInfo} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
const {data:userPosts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);

console.log({
    "userInfo":userInfo,
    "userPosts":userPosts
})
}

export default getData;


