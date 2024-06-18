import { useState, useEffect } from "react"
import { CustomerViews } from "./View.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localShellUser = localStorage.getItem("activeUser")
    const shellUserObject = JSON.parse(localShellUser)

    setCurrentUser(shellUserObject)
  }, [])

  return <CustomerViews currentUser={currentUser} />
}
