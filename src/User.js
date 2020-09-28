import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-async';

import { useUsersState, useUsersDispatch, getUser } from './UsersContext_bak';

/* useAsync 관련코드 주석
async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
} */

export default function User({ id }) {
  /* useAsync 관련코드 주석
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  }); */

  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id)
  }, [dispatch, id]);

  const { loading, data: user, error } = state.user;


  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;
  return (
    <>
      <h2>{user.username}</h2>
      <p>
        <b>email:</b> {user.email}
      </p>
    </>
  );
}
