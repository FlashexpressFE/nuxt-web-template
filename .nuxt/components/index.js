export { default as ShareThis } from '../../components/ShareThis.vue'
export { default as ApplyButton } from '../../components/apply-button.vue'
export { default as BlogBanner } from '../../components/blog-banner.vue'
export { default as BlogDetail } from '../../components/blog-detail.vue'
export { default as BlogInfo } from '../../components/blog-info.vue'
export { default as BlogList } from '../../components/blog-list.vue'
export { default as BlogSelect } from '../../components/blog-select.vue'
export { default as FlashBottom } from '../../components/flash-bottom.vue'
export { default as FlashHeader } from '../../components/flash-header.vue'
export { default as FormInfo } from '../../components/form-info.vue'
export { default as FormSubmit } from '../../components/form-submit.vue'
export { default as FunctionInfo } from '../../components/function-info.vue'
export { default as Icon } from '../../components/icon.vue'
export { default as LoginApplyButton } from '../../components/login-apply-button.vue'
export { default as Logo } from '../../components/logo.vue'
export { default as StructureInfo } from '../../components/structure-info.vue'
export { default as SwitchLanguage } from '../../components/switch-language.vue'
export { default as Titles } from '../../components/titles.vue'
export { default as TopShowMain } from '../../components/top-show-main.vue'
export { default as TopShow } from '../../components/top-show.vue'
export { default as WordInfo } from '../../components/word-info.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
