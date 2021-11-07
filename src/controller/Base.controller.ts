import Controller from 'sap/ui/core/mvc/Controller'
import Fragment from 'sap/ui/core/Fragment'
import i18n from '../util/i18n'

export default class Base extends Controller {
  getText = i18n.getText.bind(null)

  loadFragment<FragmentType>(name: string): Promise<FragmentType> {
    return Fragment.load({
      name,
      controller: this,
    }) as Promise<FragmentType>
  }
}
