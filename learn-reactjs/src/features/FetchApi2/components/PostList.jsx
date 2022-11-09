import styled from "styled-components";

const Li = styled.li`
  color: deeppink;
`;

function PostList({ postList }) {
    console.log(postList);

    return (
        <>
            <h1>Fetch Api 2</h1>
            <ul>
                {postList.map((post, index) => (
                    <Li key={index}>{post.title}</Li>
                ))}
            </ul>
        </>
    );
}

export default PostList;
