import { RouterProvider } from "react-router-dom";
import router from "./router";

const user = {
  name: "Beuther WEB",
  itemList: [],

  addItem(itemObj){
    this.itemList.push(itemObj)
  }
}

export default function App (){
  return(
    <div className="app">
      <h1>Testing</h1>
      <RouterProvider router={router} user={user} />
    </div>
  )
}