import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const getTokenFromURL = () => new URLSearchParams(location.search).get('token');
    const getUserFromURL = () => new URLSearchParams(location.search).get('user');

    const tokenFromURL = getTokenFromURL();
    const userFromURL = getUserFromURL();

    const storedToken = localStorage.getItem('token') || '';
    const storedUser = JSON.parse(JSON.parse(localStorage.getItem('user'))) || {}; // Parsing stored user data

    useEffect(() => {
        if (storedUser && storedToken) {
            setUser({
                _id: storedUser?._id,
                name: storedUser?.name,
                email: storedUser?.email,
                token: storedToken,
                isLoggedIn: !!storedToken,
            })
        }
        if (tokenFromURL && userFromURL) {
            localStorage.setItem('token', tokenFromURL);
            localStorage.setItem('user', JSON.stringify(userFromURL));
            setUser({
                _id: userFromURL?._id || "",
                name: userFromURL?.name || "Avatar",
                email: userFromURL?.email || "demo.email@domain.com",
                token: tokenFromURL,
                isLoggedIn: true,
            });
            navigate("/dashboard");
        }
    }, [tokenFromURL, userFromURL, navigate]);

    useEffect(() => {
        if (!user.isLoggedIn) {
            navigate("/login");
        }
    }, [user.isLoggedIn, navigate]);

    return <UserContext.Provider value={{
        user, setUser
    }} >
        {children}
    </UserContext.Provider>
}