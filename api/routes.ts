"use server"
const BASE_URL = 'https://staging.mazaady.com/api/v1'


export const fetchCategories = async(): Promise<any> => {
  const data = await customFetch('/get_all_cats')
  return data
}

export const fetchProcessType = async(id: string): Promise<any> => {
  const data = await customFetch(`/properties?cat=${id}`)
  return data?.data
}

export const customFetch = async(route: string): Promise<any> => {
  try {
    const apiKey = process.env.API_KEY
    const response = await fetch(`${BASE_URL}${route}`, {
      headers: {
        'private-key': `${apiKey}`,
      }
    })
    const data = await response.json()
    return { data }
  } catch (error) {
    return { error: error }
  }
}