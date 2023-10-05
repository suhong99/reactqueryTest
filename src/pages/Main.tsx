import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Main</div>
      <button
        onClick={() => {
          navigate('/accom');
        }}
      >
        숙박 이동
      </button>
    </div>
  );
};

export default Main;
