import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getProductsRequest, RootState } from "./redux";
import { DataState } from "./redux/reducers/product";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export interface DataStateItem {
  id: number;
  name: string;
}

function App() {
  

  const dispatch = useAppDispatch()
  const dataState: DataState = useAppSelector(state => state.data)
  const [data, setData] = useState([] as any)


  const handleData = () => {
   dispatch(getProductsRequest())
  } 
  
  useEffect(()=>{
    handleData()
  },[])

  useEffect(() => {
    const products = dataState?.data?.products; 
    setData(products)
    console.log(data)   
    console.log(dataState)   
  }, [dataState])
  
  

  return (
    <>
      {data?.map((item:DataStateItem)=>(
        
        <h1 key={item.id}>{item.name}</h1>
      ))}
      <button onClick={handleData}>User Request</button>
    </>
  );
}

export default App;
