import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {QueryClient} from 
import {ReactNode} from 'react'

const queryClient = new QueryClient()

export const QueryProvider = ({ children } : {children : ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

