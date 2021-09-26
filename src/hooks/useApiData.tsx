import { useState, useEffect } from 'react'

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export enum BodyType {
  SUV = 'suv',
  ESTATE = 'estate',
  SEDAN = 'sedan'
}

interface Error {
  message: string;
}

interface APIResponse {
  error: null | Error;
  isLoading: boolean;
  data: Car[];
}

export const useApiData = (url: string) => {
  const [data, setData] = useState<APIResponse>({
    error: null,
    isLoading: false,
    data: []
  })

  useEffect(() => {

    try {
      setData({...data, isLoading: true})
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData({
            error: null,
            isLoading: false,
            data
          })
        })
      
    } catch (error) {
      console.log(error)
      setData({
        ...data,
        error: {
          message: 'Something went wrrong while loading data'
        },
        isLoading: false
      })
    }    

  }, [])

  return data
}