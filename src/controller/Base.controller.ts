import Controller from 'sap/ui/core/mvc/Controller'
import i18n from '../util/i18n'

export default class Base extends Controller {
  getText = i18n.getText.bind(null)
}
