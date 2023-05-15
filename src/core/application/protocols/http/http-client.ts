export type httpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type HttpRequest = {
  url: string;
  method: httpMethod;
  headers?: { [key: string]: string };
  body?: any;
};

export type HttpResponse<T = any> = {
  statusCode: number;
  data?: T;
};

export interface HttpClient {
  request: <ResponseData = any>(
    params: HttpRequest
  ) => Promise<HttpResponse<ResponseData>>;
}
