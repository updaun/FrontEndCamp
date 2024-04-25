import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsPage() {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      // variables 이게 $ 역할을 함
      variables: {
        writer: "훈이",
        title: "제목입니다.",
        contents: "내용입니다..",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API(비동기) 요청하기</button>
    </div>
  );
}
