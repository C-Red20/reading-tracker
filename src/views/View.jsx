import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { NavBar } from "../components/nav/NavBar.jsx"




export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                
                {/* <Route path ="articles">
                    <Route index 
                    element={<ArticleList currentUser={currentUser} />} 
                    />
                    <Route path=":create" 
                    element={<ArticleForm currentUser={currentUser} />} 
                    />
                    <Route path="edit/:articleId" 
                    element={<ArticleEditForm currentUser={currentUser} />} 
                    />
                </Route>

                <Route path ="events">
                    <Route index element={<EventList currentUser={currentUser} />} />
                    <Route path=":create" element={<EventForm currentUser={currentUser} />} />
                    <Route path="edit/:eventId" element={<EventEditForm currentUser={currentUser} />} />
                </Route>

                <Route path="tasks">
                    <Route index element={<TaskList currentUser={currentUser} />} />
                    <Route path="create" element={<TaskForm currentUser={currentUser} />} />
                    <Route path="edit/:taskId" element={<EditTask currentUser={currentUser} />} />
                </Route> */}

            </Route>

            {/* <Route path="messages" element={<MessageList/>}/>
            <Route path=":create" element={<MessageForm currentUser={currentUser} />} /> */}
        </Routes>
    )
}