import JSONListBinding from 'sap/ui/model/json/JSONListBinding'
import Filter from 'sap/ui/model/Filter'
import FilterOperator from 'sap/ui/model/FilterOperator'
import FilterType from 'sap/ui/model/FilterType'
import Event from 'sap/ui/base/Event'
import Base from './Base.controller'
import ModelIndex from '../model/index'
import { read } from '../util/connector'
import formatter from '../util/formatter'
import { IOrder, IViewConfig } from '../types'

export default class ProductsController extends Base {
  constructor() {
    super('')
  }

  formatter = formatter

  onInit(): void {
    read<{ results: IOrder[] }>('/Orders', {
      urlParameters: {
        $expand: 'Customer',
      },
    })
      .then((orders) => {
        ModelIndex.setModel('Orders', orders.results)
        ModelIndex.updateData<IViewConfig>('ViewConfig', {
          ordersCount: orders.results.length,
          loadingOrders: false,
        })
      })
      .catch(console.error)
  }

  searchOnList(event: Event): void {
    const query = event.getParameter('newValue') as string
    const list = this.byId('idOrdersList')
    const listBinding = list.getBinding('items') as JSONListBinding

    if (!query) {
      listBinding.filter([])
    } else {
      const filter = new Filter({
        and: false,
        filters: [
          new Filter({
            path: 'Customer/CompanyName',
            operator: FilterOperator.Contains,
            value1: query,
          }),
          new Filter({
            path: 'OrderID',
            operator: FilterOperator.EQ,
            value1: parseInt(query),
          }),
        ],
      })

      listBinding.filter(filter)
    }
  }
}
