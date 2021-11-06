import * as f from 'sap/f/library'
import Filter from 'sap/ui/model/Filter'

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]

export interface IOrder {
  OrderID: number
  OrderDate: Date
  ShippedDate: Date
  Customer: {
    CompanyName: string
  }
}

export interface IViewConfig {
  layout: f.LayoutType
  loadingOrders: boolean
  ordersCount: number
  ordersFilters: Filter[]
  searchQuery: string
}
