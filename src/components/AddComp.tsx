import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import AddInput from "./AddInput";
interface Accommodation {
  accomNumber: number;
  accomName: string;
  accomAddress: string;
  teleNumber: string;
}

interface QueryData {
  data: {
    accom: Accommodation[];
  };
}
const AddComp = () => {
  // const getMyHouse = async () => {
  //   console.log("실행되나 안에서");
  //   // return await axios.get('http://localhost:4000/mypage');
  // };
  // const { data, isLoading } = useQuery(["my-house"], getMyHouse, {
  //   cacheTime: 5 * 60 * 1000,
  //   staleTime: 2 * 60 * 1000,
  // });

  const { data, isLoading } = useQuery<QueryData>(["my-house"]);
  console.log(data, "안에서");
  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <AddCompContainer>
      <div>AddComp</div>
      {data?.data.accom.map(({ accomNumber, accomName, accomAddress, teleNumber }: Accommodation) => (
        <div key={accomNumber}>
          <div style={{ backgroundColor: "red" }}>이름 : {accomName}</div>
          <div>주소 : {accomAddress}</div>
          <div>번호 : {teleNumber}</div>
        </div>
      ))}
      <div>
        <AddInput data={data} />
      </div>
    </AddCompContainer>
  );
};

export default AddComp;

const AddCompContainer = styled.div`
  border-radius: 10px;
  width: 400px;
  height: 400px;
  border: 1px solid black;
`;
