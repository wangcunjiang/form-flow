<template>
  <div class="app-store">
    <el-container>
      <el-main class="app">
        <!-- <app-card :appInfo="appInfoDemo"/> -->
        <app-card v-for="(item, index) of appInfoList" :key="index" :appInfo="item"/>
        <new-card @newApp="showDialog = true"/>
      </el-main>
    </el-container>
    <!-- 弹窗 -->
    <el-dialog modal title="新建应用" width="600px" :visible.sync="showDialog">
      <el-form :model="appInfo" label-position="left" label-width="68px">
        <el-row>
          <el-form-item label="应用名称">
            <el-input v-model="appInfo.title"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="应用描述">
              <el-input v-model="appInfo.description" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveApp">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppApi from '@/apis/AppApi'
import AppCard from '@/components/app-room/AppCard.vue'
import NewCard from '@/components/app-room/NewCard.vue'

@Component({
  components: { AppCard, NewCard }
})
export default class AppRoom extends Vue {
  // ~ fields --------------------------------------------------

  // 是否显示弹窗
  showDialog: Boolean = false

  // app demo
  appInfoDemo: any = {
    id: 'demo',
    title: 'Demo App',
    description: '使用设计好的表单收集数据，点击进入开始吧！',
    useForm: true,
    useFlow: false
  }

  // app 表单
  appInfo: any = {
    title: '',
    description: '',
    useForm: true,
    useFlow: false
  }

  // app list
  appInfoList: any = []

  // ~ methods --------------------------------------------------

  async mounted() {
    this.showAppList()
  }

  // 查询应用列表
  async showAppList() {
    let res = await new AppApi().appList()
    this.appInfoList = res
  }

  // 保存应用
  async saveApp() {
    let res = await new AppApi().saveApp(this.appInfo)
    this.showDialog = false
    this.showAppList()
  }
}
</script>