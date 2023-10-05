import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

const AddInput = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  //   const addHouse = () => {};
  const mutation = useMutation(addHouse, {
    onSuccess() {
      queryClient.invalidateQueries(['my-house']);
    },
    onError(err) {
      console.log(err);
    },
  });
  return (
    <div>
      <button>입력버튼</button>
      <div>3개중 2개만 ㅋㅋ..</div>
      <input onChange={(e) => setAddress(e.target.value)} />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default AddInput;
