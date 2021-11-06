import UIComponent from 'sap/ui/core/UIComponent'
import Component from '../Component'
import JSONModel from 'sap/ui/model/json/JSONModel'
import Model from 'sap/ui/model/Model'
import { AtLeastOne } from '../types'

let component: UIComponent & Component

export default {
  init(componentRef: UIComponent & Component): void {
    component = componentRef
  },

  setModel<DataType>(modelName: string, data: DataType): Model {
    const model = new JSONModel(
      data as unknown as Record<string, unknown> | string
    )

    component.setModel(model, modelName)

    return model
  },

  getModel<ModelType>(modelName: string): ModelType | Model {
    return component.getModel(modelName)
  },

  getData<DataType>(modelName: string): DataType {
    const model = component.getModel(modelName)

    return model.getProperty('/') as DataType
  },

  updateData<DataType>(
    modelName: string,
    updateObject: AtLeastOne<DataType>
  ): DataType {
    const data = this.getData<DataType>(modelName)

    this.setModel<DataType>(modelName, { ...data, ...updateObject })

    return this.getData(modelName)
  },
}
