import Controller from 'sap/ui/core/mvc/Controller'
import Component from '../Component'
import Fragment from 'sap/ui/core/Fragment'
import XMLView from 'sap/ui/core/mvc/XMLView'
import i18n from '../util/i18n'
import Control from 'sap/ui/core/Control'

export default class Base extends Controller {
  getText = i18n.getText.bind(null)

  loadFragment<FragmentType>(name: string): Promise<FragmentType> {
    return Fragment.load({
      name,
      controller: this,
    }) as Promise<FragmentType>
  }
}
