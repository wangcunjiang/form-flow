import Api from './Api'

export default class TaskApi extends Api {
  //~ ------------------------------------------------------
  // 构造器
  constructor() {
    super()
  }

  //~ ------------------------------------------------------
  // 保存流程结构数据
  async start(taskStartVo: any) {
    const res: any = await this.http.post('/api/task/start', taskStartVo)
    return super.extractData(res)
  }

}