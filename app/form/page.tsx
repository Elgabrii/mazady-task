import React from 'react'
import MazadyForm from '@/components/mazadyForm/mazadyForm'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { fetchCategories } from '@/api/routes'


export default async function MazadyFormPage () {
const queryClient = new QueryClient()
await queryClient.prefetchQuery({
  queryKey:['categories'],
  queryFn: fetchCategories,
})
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MazadyForm />
      </HydrationBoundary>
    </div>
  )
}