import demo from './demo/demo.vue'
import icon from './icon/icon.vue'
import hud from './hud/hud.vue'
import layout from './layout/layout.vue'
import wrapper from './wrapper/wrapper.vue'
import header from './header/header.vue'
import footer from './footer/footer.vue'
import toolbar from './toolbar/index.vue' //右侧工具栏

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(icon.name, icon)
    Vue.component(hud.name, hud)
    Vue.component(layout.name, layout)
    Vue.component(wrapper.name, wrapper)
    Vue.component(header.name, header)
    Vue.component(footer.name, footer)
    Vue.component(toolbar.name, toolbar)
}

export default install