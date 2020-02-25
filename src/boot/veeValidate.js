import VeeValidate, { Validator } from 'vee-validate'
import messagesBr from 'vee-validate/dist/locale/pt_BR'
import messagesEn from 'vee-validate/dist/locale/en'
import messagesEs from 'vee-validate/dist/locale/es'

Validator.localize('pt_BR', messagesBr)
Validator.localize('en', messagesEn)
Validator.localize('es', messagesEs)

export default ({ app, Vue }) => {
  Vue.use(VeeValidate, {
    errorBagName: 'vErrors',
    locale: 'pt_BR',
    i18nRootKey: 'validations',
    dictionary: {
      pt_BR: { messages: messagesBr },
      en: { messages: messagesEn },
      es: { messages: messagesEs }
    }
  })
}
