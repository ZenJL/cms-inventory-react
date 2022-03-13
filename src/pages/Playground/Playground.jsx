import React from 'react';

import { fetchTodo } from 'services/todoServices';

function Playground() {
  async function handleFetchTodo() {
    try {
      const res = await fetchTodo();

      console.log('res: ', res);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div>
      <button type='button' onClick={handleFetchTodo}>
        Fetch todo
      </button>
    </div>
  );
}

export default Playground;
