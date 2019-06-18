import Vue, { CreateElement, VNode } from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

  @Prop() data!: any

  render() {
    console.log('  item type = input')
    return (
      <el-input placeholder={this.data.placeholder}></el-input>
    )
  }

}