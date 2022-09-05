export interface IUserAuthParams {
  username: string
  password: string
}

export interface IUserAuth {
  index(params: IUserAuthParams): Promise<any>
}
