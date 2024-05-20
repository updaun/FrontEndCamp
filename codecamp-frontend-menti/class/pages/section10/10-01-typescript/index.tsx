export default function TypescriptPage() {
  // 타입추론
  let aaa = "안녕하세요";
  //   aaa = 3;

  // 타입명시
  let bbb: string = "반갑습니다";
  //   bbb = 10;

  // 타입명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;
  //  let ddd = 10;
  //   ddd = "철수";

  // 불린타입
  let eee: boolean = true;
  eee = false;
  //   eee = "false"; // true

  // 배열타입
  //   let fff: number[] = [1, 2, 3, "안녕"];
  //   let ggg: string[] = [1, 2, 3, "안녕"];
  let hhh: (number | string)[] = [1, 2, 3, "안녕"];

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 10,
    school: "다람쥐초등학교",
  };
  profile.name = "훈이"; // 타입추론으로 이것만 가능
  profile.age = "10살";
  profile.hobby = "축구";

  // 함수타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");
  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원");

  // any타입
  let qqq: any = "철수"; // js와 동일
  qqq = 10;
  qqq = true;
  qqq = [1, 2, 3, "안녕"];

  return <></>;
}
