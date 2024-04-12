import http from "@/framework/utils/http";
import { useMutation } from "@tanstack/react-query";

export interface LoginInputType {
  username: string;
  password?: string;
}

async function getAccessTokenAPI(input: LoginInputType) {
  const { data } = await http.post("/auth/", input);
  return data;
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (input: LoginInputType) => getAccessTokenAPI(input),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any) {
      if (error.response) {
        console.log("LOGN INVALID", error?.response.data);
      }
    },
  });
};
