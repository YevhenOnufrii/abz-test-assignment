export const getPositions = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const msg = `There was an error: "${response.status}", "${response.statusText}`
      throw new Error(msg)
    }
    const data = await response.json()
    return data.positions
  } catch (error) {
    console.log(error.message)
  }
}

export const getToken = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      const msg = `There was an error: ${response.status}, ${response.statusText}`
      throw new Error(msg)
    }
    const data = await response.json()
    const token = await data.token

    return token
  } catch (error) {
    console.log(error.message)
  }
}
