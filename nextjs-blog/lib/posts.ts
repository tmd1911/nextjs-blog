import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        const id = fileName.replace(/\.md$/,'');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);
        console.log(matterResult);
        const title = matterResult.data['title']
        const date = matterResult.data['date']
        const content = matterResult.content
        return {
            id,title,date,content
        }
    })

    return allPostsData.sort(({date:a},{date:b})=>{
        if (a < b) {
            return 1;
        }
        else if (a > b) {
            return -1;
        }
        else {
            return 0;
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    // [{params: {id: 'id1'}},{params: {id: 'id2'}}]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/,'')
            }
        }
    })
}

export function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    console.log(matterResult);
    const title = matterResult.data['title']
    const date = matterResult.data['date']
    const content = matterResult.content
    return {
        id,title,date,content
    }
}
