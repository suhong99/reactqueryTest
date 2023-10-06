import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
interface Accommodation {
  accomNumber: number;
  accomName: string;
  accomAddress: string;
  teleNumber: string;
}
interface QueryData {
  data?: {
    accom: Accommodation[];
  };
}

const AddInput: React.FC<QueryData> = ({ data }) => {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const addHouse = () => {
    return axios.patch("http://localhost:4000/mypage", {});
  };
  const mutation = useMutation(addHouse, {
    onSuccess() {
      queryClient.invalidateQueries(["my-house"]);
    },
    onError(err) {
      console.log(err);
    },
  });

  return (
    <div>
      <div>
        이름 : <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        주소 : <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        주소 : <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button>입력버튼</button>
    </div>
  );
};

export default AddInput;

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";

// const AddInput = () => {
//   const queryClient = useQueryClient();

//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");

//   const addHouse = async () => {
//     try {
//       // 새로운 accom 객체를 생성
//       const newAccom = {
//         accomName: name,
//         accomAddress: address,
//         teleNumber: phone,
//       };

//       // 서버에 새로운 accom 데이터를 추가
//       await axios.post("http://localhost:4000/mypage/accom", newAccom);

//       // 추가된 데이터를 다시 불러올 수 있도록 캐시를 무효화
//       queryClient.invalidateQueries(["my-house"]);
//     } catch (error) {
//       console.error("데이터 추가 오류:", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         이름 : <input value={name} onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         주소 : <input value={address} onChange={(e) => setAddress(e.target.value)} />
//       </div>
//       <div>
//         전화번호 : <input value={phone} onChange={(e) => setPhone(e.target.value)} />
//       </div>
//       <button onClick={addHouse}>입력버튼</button>
//     </div>
//   );
// };

// export default AddInput;
