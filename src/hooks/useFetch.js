import { useState } from "react";

export const useFetch = (query) => {
  const [loading, toggleLoading] = useState(false);

  const mutate = async (body, params) => {
    try {
      toggleLoading(true);
      const res = await query(body, params);
      return res;
    } catch (err) {
      throw err;
    } finally {
      toggleLoading(false);
    }
  };

  return [mutate, loading];
};
