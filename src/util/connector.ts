import ODataModel from 'sap/ui/model/odata/v2/ODataModel'
import Filter from 'sap/ui/model/Filter'
import Sorter from 'sap/ui/model/Sorter'

const model = new ODataModel('/Northwind.svc')

export interface IParams {
  filters?: Filter[]
  sorters?: Sorter[]
  urlParameters?: Record<string, string>
}

export const read = <ReturnType>(
  path: string,
  params?: IParams
): Promise<ReturnType> =>
  new Promise((resolve, reject) => {
    model.read(path, {
      ...params,
      success: resolve,
      error: reject,
    })
  })
