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
}
