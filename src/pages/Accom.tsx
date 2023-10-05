import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
const Accom = () => {
  const navigate = useNavigate();

  const getMyHouse = async () => {
    console.log('실행되나');
    return await axios.get('http://localhost:4000/mypage');
  };

  const { data, isLoading } = useQuery(['my-house'], getMyHouse, {
    cacheTime: 5 * 60 * 1000,
    staleTime: 2 * 60 * 1000,
  });
  console.log(data, isLoading, '데이터와 이즈로딩');

  const [state, setState] = useState(true);

  return (
    <div>
      <div>Accom</div>

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈 이동
      </button>
      <br />
      <div>
        <button
          style={{ backgroundColor: '#008000', color: 'white' }}
          onClick={() => {
            setState(!state);
          }}
        >
          상태 바꾸기
        </button>
      </div>
    </div>
  );
};

export default Accom;
