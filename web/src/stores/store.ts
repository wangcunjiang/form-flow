import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"
Vue.use(Vuex)

interface FormState {
  activeMenu: any // 当前激活的导航菜单
  activeIdx: any
  meta: any
  data: any
  arch: any // 存档，缓存创建好的表单和流程结构数据
}

const store: StoreOptions<FormState> = {
  state: {
    meta: {
      form: {
        inline: false
      },
      items: [
        {
          id: null,
          prop: "input", // 字段
          value: "", // 值
          itemType: "el-input", // 类型
          label: "输入框", // 名称
          placeholder: "请输入...", // 占位值
          icon: "el-icon-edit", // 左侧栏图标
          prefixIcon: "", // 输入框前图标
          inputType: "text"
        },
        {
          id: null,
          itemType: "el-input",
          prop: "text",
          label: "文本域",
          icon: "el-icon-tickets",
          inputType: "textarea"
        },
        {
          id: null,
          itemType: "el-select",
          prop: "select",
          label: "下拉框",
          icon: "el-icon-arrow-down",
          options: [
            {
              value: "k1",
              label: "选项一"
            },
            {
              value: "k2",
              label: "选项二"
            }
          ]
        },
        {
          id: null,
          itemType: "el-date-picker",
          prop: "date",
          label: "日期选择器",
          placeholder: "请选择...zhanweifu...",
          icon: "el-icon-time"
        }
      ]
    },
    data: {
      form: {},
      formItems: [],
      result: {},
      table: [],
      flow: {}
    },
    activeMenu: "/",
    activeIdx: -1,
    arch: {}
  },
  mutations: {
    active(state, idx) {
      state.activeIdx = idx
    },

    // 设置当前激活导航菜单
    setActiveMenu(state, menu) {
      state.activeMenu = menu
    },

    // 更新表单结构数据
    updateFormItems(state, items) {
      state.data.formItems = items
    },

    // 根据顺序id更新
    updateByIdx(state, { idx, item }) {
      let target = state.data.formItems[idx]
      // 判断是否有该字段，动态添加
      // 有点麻烦，不如在初始化时就指定数据
      // if (target.type == "el-input")
      //   Vue.set(target, "prefixIcon", item.prefixIcon)
      Object.assign(target, item)
    },

    removeByIdx(state, idx) {
      state.data.formItems.splice(idx, 1)
    },

    // 表单填值后，更新结果值
    updateResult(state, { field, value }) {
      Vue.set(state.data.result, field, value)
    },
    
    commitTable(state) {
      let { result, table } = state.data
      table.push(JSON.parse(JSON.stringify(result)))
      result = {}
    }
  }
}

export default new Vuex.Store<FormState>(store)
