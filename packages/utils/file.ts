const isOverFileSize = (file: File, limitSize: number = 10) => {
  const MB = 1024 ** 2
  return file.size > limitSize * MB
}

const isUnderFileSize = (file: File, limitSize: number = 10) => {
  const MB = 1024 ** 2
  return file.size < limitSize * MB
}

const getByteSize = (file: File) => {
  const MB = 1024 ** 2
  return (file.size / MB).toFixed(2) + 'MB'
}

const getMBsize = (file: File) => {
  const MB = 1024 ** 2
  return file.size * MB
}

const getFileName = (file: File) => {
  const name = file.name
  const regex = /[^.]+$/
  const [extension] = name.match(regex) as RegExpMatchArray
  return name.split(`.${extension}`)[0]
}

const getFileExtension = (file: File) => {
  const regex = /[^.]+$/
  const [extension] = file.name.match(regex) as RegExpMatchArray
  return extension.toLocaleLowerCase()
}

const getImageWidthHeight = async (
  file: File,
): Promise<{ height: number; width: number }> => {
  return await new Promise(resolve => {
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = () => {
      return resolve({
        width: image.width,
        height: image.height,
      })
    }
    image.onerror = () => {
      return resolve({
        width: 0,
        height: 0,
      })
    }
  })
}

const acceptImageFileList = (extension = ['png', 'jpg', 'jpeg']) => {
  extension = extension.map(ext => ext.toLowerCase())
  return extension
}

const acceptAudioFileList = (extension = ['mp3', 'm4a', 'wav']) => {
  return extension
}

const fileUtils = {
  isOverFileSize,
  isUnderFileSize,
  getByteSize,
  getMBsize,
  getFileName,
  getFileExtension,
  getImageWidthHeight,
  acceptImageFileList,
  acceptAudioFileList,
}

export default fileUtils
