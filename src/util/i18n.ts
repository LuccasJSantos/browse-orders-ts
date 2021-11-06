import ResourceModel from 'sap/ui/model/resource/ResourceModel'
import ResourceBundle from 'sap/base/i18n/ResourceBundle'
import ModelIndex from '../model/index'

export default {
  getText(key: string, ...values: string[] | number[]): string {
    const model = ModelIndex.getModel('i18n') as ResourceModel
    const bundle = model.getResourceBundle() as ResourceBundle

    return bundle.getText(key, values)
  },
}
