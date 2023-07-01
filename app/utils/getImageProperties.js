export function getImageProperties(imageFile) {
  const imageDimensions = { width: null, height: null }
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result

      img.onload = () => {
        imageDimensions.width = img.width
        imageDimensions.height = img.height

        resolve(imageDimensions)
      }
    }
  })
}
