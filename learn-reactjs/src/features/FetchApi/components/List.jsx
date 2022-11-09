import styled from "styled-components";

const Li = styled.li`
  color: deeppink;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  display: block;
`;

function List({ list }) {
    console.log(list);

    return (
        <>
            <h1>Fetch Api</h1>
            <ul>
                {list.map((item, index) => (
                    <Li key={index}>
                        {item.title}
                        {/* <Img src={item.imageUrl} alt="images" /> */}
                    </Li>
                ))}
            </ul>
        </>
    );
}

export default List;
