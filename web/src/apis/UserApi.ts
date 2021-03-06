import Api from "./Api"

export default class UserApi extends Api {
  //~ ------------------------------------------------------
  // 构造器
  constructor() {
    super()
  }

  //~ ------------------------------------------------------
  // 新增用户
  async saveUser(userVo: any) {
    const res: any = await this.http.post("/api/user/save", userVo)
    return super.extractMsg(res)
  }

  // 查询用户
  async userList(userQuery: any) {
    const res: any = await this.http.post("/api/user/userList", userQuery)
    return super.extractData(res)
  }

  // 删除用户
  async deleteUser(id: any) {
    const res: any = await this.http.delete("/api/user/deleteUser", {
      params: {
        id
      }
    })
    return super.extractMsg(res)
  }
}
