import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/journal-app/" element={ <JournalPage /> } />

        <Route path="/journal-app/*" element={ <Navigate to="/journal-app/" /> } />
    </Routes>
  )
}
