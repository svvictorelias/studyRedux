import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "./redux";
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
    dispatch(getUserRequest(name))
  } 

  useEffect(() => {
    const xx = userState.user.products; 
    setData(xx)
    console.log(data)   
  }, [userState])
  
  
  

  return (
    <>
      {/* <h1>User {userState.user.description} - {userState.user.name} - {userState.user.price}</h1> */}
      {data?.map((item:UserStateItem)=>(
        // console.log(item)
        <h1>{item.name}</h1>
      ))}
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleUser} disabled={!name.length}>User Request</button>
    </>
  );
}

export default App;
