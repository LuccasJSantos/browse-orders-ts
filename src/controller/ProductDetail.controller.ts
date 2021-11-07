import Event from 'sap/ui/base/Event'
import Base from './Base.controller'
import Component from '../Component'

export default class ProductDetail extends Base {
  onInit(): void {
    const component = this.getOwnerComponent() as Component

    component
      .getRouter()
      .getRoute('detail')
      .attachPatternMatched(this.onRouteMatched.bind(this))
  }

  onRouteMatched(event: Event): void {
    const args = event.getParameter('arguments') as Record<string, string>
    const path = window.decodeURIComponent(args.orderPath)

    this.getView().bindElement({
      path: `${path}`,
      model: 'Orders',
    })
  }
}
