import Vue, { CreateElement, VNode, RenderContext } from 'vue'
import G6 from '@antv/g6'
import NodeCard from '@/components/flow/NodeCard'
import { FlowNode } from '.'

export default class Maker {
  shape = 'shape'

  register(option: any) {
    const html = G6.Util.createDOM(`<div>`)
    G6.registerNode(this.shape, {
      draw(item: any) {
        const group = item.getGraphicGroup()
        return group.addShape('dom', {
          attrs: {
            x: 0,
            y: 0,
            width: option.width,
            height: option.height,
            html
          }
        })
      },
      anchor: [[0.5, 0], [0.5, 1]]
    })
    return html
  }

  createDom(model: any, graph: any) {
    let g6Node = graph.add('node', {
      id: model.id,
      x: model.x,
      y: model.y,
      shape: this.shape
    })
    console.log('创建 g6 节点，node =', g6Node)
    return g6Node
  }

  /**
   * 渲染 vnode 到创建好的 dom 上
   *
   * @param h 渲染函数
   * @param handler 回调函数集合
   */
  mountNode(h: CreateElement, html: any, node: FlowNode, handler: any) {
    let vueNode = Vue.extend({
      props: ['node'],
      render: () => {
        return new NodeCard().render(h, node, handler)
      }
    })
    new vueNode({
      propsData: {
        node
      }
    }).$mount(html)
  }
}
