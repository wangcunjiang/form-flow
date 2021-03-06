import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import InputConfig from './configs/InputConfig.vue'
import SelectConfig from './configs/SelectConfig.vue'

@Component({ components: { InputConfig } })
export default class FormConfig extends Vue {
  @Prop()
  item!: any

  render() {
    console.log('=== 渲染表单配置，item =', this.item)

    if (!this.item.itemType) return

    let config = this.getConfig()
    console.debug('  get config =', config)

    return (
      <config
        // 绑定 prop
        item={this.item}
        // 绑定自定义事件
        {...{ on: { updateItem: this.updateItem } }}
      />
    )
  }

  // 获取组件
  getConfig() {
    switch (this.item.itemType) {
      case 'el-input':
        return InputConfig
      case 'el-select':
        return SelectConfig
    }
  }

  // 把事件丢给上一层
  updateItem(value: any) {
    this.$emit('updateItem', value)
  }
}
