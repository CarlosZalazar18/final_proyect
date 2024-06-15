import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/page/LoginPage"
import { ItemsRoutes } from "../store"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />}/>
            <Route path="/*" element={<ItemsRoutes />}/>
        </Routes>
    </>
  )
}
