const useRule = () => {
  const rules = {
    required: (message = '') => {
      return {
        required: true,
        message,
      }
    },
    selected: (message = '') => {
      return {
        validator: async (_: any, value: any) => {
          if (!value) {
            return await Promise.reject(new Error(message))
          }
          return await Promise.resolve()
        },
      }
    },
    checked: () => {
      return {
        validator: async (_: any, value: boolean) => {
          if (value) {
            return await Promise.resolve()
          }
          return await Promise.reject(new Error())
        },
      }
    },
    email: (message = '') => {
      const regex =
        /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
      return {
        pattern: regex,
        message,
      }
    },
    password: (message = '') => {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@~\]()[$!%*#?&\-^_+={}<>|\\""''])[A-Za-z\d@~\]()[$!%*#?&\-^_+={}<>|\\""'']{8,20}$/
      return {
        pattern: regex,
        message,
      }
    },
    onlyString: (message = '') => {
      const regex =
        /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣一-龠ぁ-ゔァ-ヴー々〆〤áÁéÉíÍóÓúÚñÑüÜ]*$/
      return {
        pattern: regex,
        message,
      }
    },
  }

  return {
    rules,
  }
}

export default useRule
