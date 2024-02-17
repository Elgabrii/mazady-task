"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from 'react'
enum process {
  NORMAL = 'normal',
  OTHER = 'other'
}
import Button from "@/components/ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFetchCategories, useFetchProcessType } from "@/api/hooks"

const formSchema = z.object({
  mainCategory: z.string({
    required_error: 'Please Select a main category'
  }),
  subCategory: z.string({
    required_error: 'Please Select a sub category'
  }),
  processType: z.string().optional(),
  other: z.string().min(2).optional(),
  brand: z.string().optional(),
  model: z.string().optional(),
  type: z.string().optional(),
  transmissionType: z.string().optional(),
})

export default function MazadyForm() {
  const { data, error, isFetching } = useFetchCategories()
  const [processSlugs, setProcessSlugs] = useState([])
  const categories = data?.data?.data?.categories

  // 1. Define your our Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      processType: '',
    }
  })
  const selectedMainCategory = form.watch('mainCategory')
  const subCategories = categories?.find((category: any) => category.id.toString() === selectedMainCategory)?.children
  
  const selectedSubCategory = form.watch('subCategory')
  
  const { data: processTypeData, error: processTypeError, isFetching: processTypeIsFetching } = useFetchProcessType(selectedSubCategory)

  const processTypes = processTypeData?.data || []
  
  const processTypeArr = processTypes[0]?.options as Array<any>

  
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
  }
  return (
    <div className='flex justify-center items-center p-5'>
      <div className='rounded-lg border p-5 border-secondary min-w-96'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="mainCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Cateogry <span className='text-primary'>*</span></FormLabel>
                  <Select disabled={isFetching} onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a main category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories?.map((category: any) => (
                        <SelectItem key={category.id} value={category.id.toString()}>{category.slug}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Category <span className='text-primary'>*</span></FormLabel>
                  <Select disabled={!subCategories} onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a sub category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subCategories?.map((category: any) => (
                        <SelectItem key={category.id} value={category.id.toString()}>{category.slug}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
          <FormField
              control={form.control}
              name="processType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Process Type</FormLabel>
                  <Select disabled={!processTypeArr} onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a process type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* {processTypeArr.map((option : any) => {
                        <SelectItem key={option.id} value={option?.id.toString()}>{option.slug}</SelectItem>
                      })} */}
                      <SelectItem value={process.OTHER}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            {form.watch('processType') === process.OTHER && <FormField
              control={form.control}
              name="other"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other</FormLabel>
                  <FormControl>
                    <Input placeholder="type in process type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specific brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value={process.OTHER}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specific model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value={process.OTHER}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specific type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value={process.OTHER}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transmissionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transmission Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specific type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value={process.OTHER}>Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full justify-center'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
