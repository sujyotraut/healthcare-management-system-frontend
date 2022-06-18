export interface SuccessResponse {
  status: 'success';
  data: any;
}

export interface FailResponse {
  status: 'fail' | 'error';
  message: string;
}

type JSONResponse = SuccessResponse | FailResponse;

export default JSONResponse;
