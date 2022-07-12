import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getProductsRequest, RootState } from "./redux";
import { UserState } from "./redux/reducers/user";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export interface UserStateItem {
  name: string;
}

function App() {
  

  const dispatch = useAppDispatch()
  const userState: UserState = useAppSelector(state => state.user)
  const [name, setName] = useState('')
  const [data, setData] = useState([] as any)


  const handleUser = () => {
    dispatch(getProductsRequest(name))
  } 

  useEffect(() => {
    const xx = userState.user.products; 
    setData(xx)
    console.log(data)   
  }, [userState])
  
  
  

  return (
    <>
      {data?.map((item:UserStateItem)=>(
        <h1>{item.name}</h1>
      ))}
      <button onClick={handleUser}>User Request</button>
    </>
  );
}

export default App;
