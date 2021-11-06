import { ValueState } from 'sap/ui/core/library'
import { isDateGreater } from './helpers'
import i18n from '../util/i18n'

export default {
  shippingStatus(requiredDate: Date, shippedDate: Date): ValueState {
    return isDateGreater(requiredDate, shippedDate)
      ? ValueState.Success
      : ValueState.Error
  },
  shippingStatusText(requiredDate: Date, shippedDate: Date): string {
    return isDateGreater(requiredDate, shippedDate)
      ? i18n.getText('in_time')
      : i18n.getText('too_late')
  },
}
