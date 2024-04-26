import { useMutation, gql } from "@apollo/client";

const CREAT_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 변수의 타입 적는 곳
    createProduct(
      # 실제 우리가 전달할 변수 적는 곳
      seller: $seller
      createProductInput: $createProductInput
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREAT_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
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
