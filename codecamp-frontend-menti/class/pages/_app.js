import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  // graphQL을 사용하기 위한 설정
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
  });

  return (
    <div>
      <div>==== 여기는 _app.js 위쪽 ====</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>==== 여기는 _app.js 아래쪽 ====</div>
    </div>
  );
}
