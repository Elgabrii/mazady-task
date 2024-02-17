import { useQuery } from '@tanstack/react-query'
import { fetchCategories, fetchProcessType } from './routes'

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories()
  })
}

export const useFetchProcessType = (id: string) => {
  return useQuery({
    queryKey: ['processType', id],
    queryFn: () => fetchProcessType(id),
  })
}