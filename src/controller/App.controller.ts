import MessageBox from 'sap/m/MessageBox'
import Controller from 'sap/ui/core/mvc/Controller'
import AppComponent from '../Component'
import ModelIndex from '../model/index'
import * as f from 'sap/f/library'
import { IViewConfig } from '../types'

/**
 * @namespace lab2dev.browseorders.controller
 */
export default class AppController extends Controller {
  public onInit(): void {
    // apply content density mode to root view
    this.getView().addStyleClass(
      (this.getOwnerComponent() as AppComponent).getContentDensityClass()
    )

    ModelIndex.setModel<IViewConfig>('ViewConfig', {
      layout: f.LayoutType.OneColumn,
      loadingOrders: true,
      ordersCount: 0,
      ordersFilters: [],
      searchQuery: '',
    })
  }

  public sayHello(): void {
    MessageBox.show('Hello World!')
  }
}
