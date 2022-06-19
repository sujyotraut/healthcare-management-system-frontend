export interface SuccessResponse {
  status: 'success';
  data: any;
}

export interface FailResponse {
  status: 'fail' | 'error';
  message: string;
}

export type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

type JSONResponse = SuccessResponse | FailResponse;
export default JSONResponse;
