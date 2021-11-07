import UIComponent from 'sap/ui/core/UIComponent'
import Control from 'sap/ui/core/Control'
import Router from 'sap/ui/core/routing/Router'
import { support } from 'sap/ui/Device'

import ModelIndex from './model/index'

/**
 * @namespace lab2dev.browseorders
 */
export default class Component extends UIComponent {
  constructor() {
    super()
  }

  public static metadata = {
    manifest: 'json',
  }

  private contentDensityClass: string

  public init(): void {
    // call the base component's init function
    super.init()

    this.getRouter().initialize()
    ModelIndex.init(this)
  }

  /**
   * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
   * design mode class should be set, which influences the size appearance of some controls.
   *
   * @public
   * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
   */
  public getContentDensityClass(): string {
    if (this.contentDensityClass === undefined) {
      // check whether FLP has already set the content density class; do nothing in this case
      if (
        document.body.classList.contains('sapUiSizeCozy') ||
        document.body.classList.contains('sapUiSizeCompact')
      ) {
        this.contentDensityClass = ''
      } else if (!support.touch) {
        // apply "compact" mode if touch is not supported
        this.contentDensityClass = 'sapUiSizeCompact'
      } else {
        // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
        this.contentDensityClass = 'sapUiSizeCozy'
      }
    }
    return this.contentDensityClass
  }

  public getRootControl(): Control {
    return super.getRootControl()
  }

  public getRouter(): Router {
    return super.getRouter()
  }
}
