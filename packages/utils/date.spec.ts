import { dateUtils } from '.'

describe('dateUtils', () => {
  describe('dateFormat', () => {
    test('문자열 날짜가 올바르게 형식화되는지 확인', () => {
      const date = '2020-01-01'
      const expected = '2020/01/01'
      expect(dateUtils.dateFormat(date)).toBe(expected)
    })

    test('Date 객체가 올바르게 형식화되는지 확인', () => {
      const date = new Date('2020-01-01')
      const expected = '2020/01/01'
      expect(dateUtils.dateFormat(date)).toBe(expected)
    })

    test('제공된 형식이 없을 때 기본 형식을 사용하는지 확인', () => {
      const date = '2020-01-01'
      // 기본 형식 'YYYY/MM/DD' 사용
      const expected = '2020/01/01'
      expect(dateUtils.dateFormat(date)).toBe(expected)
    })

    test('사용자 지정 형식이 적용되는지 확인', () => {
      const date = '2020-01-01'
      const format = 'DD-MM-YYYY'
      const expected = '01-01-2020'
      expect(dateUtils.dateFormat(date, format)).toBe(expected)
    })
  })
})
