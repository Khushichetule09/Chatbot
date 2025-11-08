import { Children, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext = createContext()

export const AppContextProvider = ({ children })=>{

    const navigate = useNavigate()
    const [user, setUser ] = useState(null);
    const [chats, setChats ] = useState(null);
    const [selectedChat, setSelectedChat ] = useState(null);
    const [theme, setTheme ] = useState(localStorage.getItem('theme') || 'light');

    const fetchUser = async () => {
        setUser(dummyUserData)
    }

    const fetchUserChat =async () => {
        setChats(dummyChats)
        setSelectedChat(dummyChats[0])
    }

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme])

    useEffect(()=>{
        if(user){
            fetchUserChat()
        }
        else{
            setChats([])
            setSelectedChat(null)
        }
    },[user])

    useEffect(()=>{
        fetchUser()
    },[])


    const value = {
        navigate, user ,setUser, fetchUser, chats, setChats, selectedChat, setSelectedChat, theme
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)