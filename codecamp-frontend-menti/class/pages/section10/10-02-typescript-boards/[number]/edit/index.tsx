import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationInputPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <div>#### 여기는 페이지 입니다.</div>
      <BoardWrite isEdit={true} data={data} />;
      <div>#### 여기는 페이지 입니다.</div>
    </div>
  );
}
