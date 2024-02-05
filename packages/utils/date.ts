import dayjs, { ManipulateType } from 'dayjs'

const dateFormat = (date: string | Date, format = 'YYYY/MM/DD') => {
  return dayjs(date).format(format)
}

const dateSubtractFormat = (
  date: string | Date,
  value: number,
  format = 'YYYY/MM/DD',
  unit: ManipulateType = 'day',
) => {
  return dayjs(date).subtract(value, unit).format(format)
}

const dateUtils = {
  dateFormat,
  dateSubtractFormat,
  test,
}

export default dateUtils
