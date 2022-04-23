import { NUMBER_FIFTY, NUMBER_ONEHUNDERD } from './constant'
import { PROTAL_LOCATION } from './constant'

const classNameBounding = (location, bounding, boundItem) => {
  return location === PROTAL_LOCATION.TOP
    ? {
        top: bounding.top - boundItem.height - NUMBER_FIFTY,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.BOTTOM
    ? {
        top: bounding.top + bounding.height + NUMBER_FIFTY,
        left: bounding.left + (bounding.width - boundItem.width) / 2,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.RIGHT
    ? {
        top: bounding.top - boundItem.height / 2 + bounding.height / 2,
        right: -bounding.right - NUMBER_ONEHUNDERD,
        position: 'relative',
      }
    : location === PROTAL_LOCATION.LEFT
    ? {
        top: bounding.top - boundItem.height / 2 + bounding.height / 2,
        left: bounding.left - boundItem.width - NUMBER_ONEHUNDERD,
        position: 'relative',
      }
    : null
}

export default classNameBounding
