import React, {
    createContext,
    useContext,
    useState,
    useCallback
} from 'react';
import api from '../services/api';

interface UserContextData {
    getUserInfo(): Promise<void>;
    userData: UserData;
}

interface UserData {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: false,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

const dataInitialState = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: 'Joao',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: ''
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<UserData>(
        dataInitialState as UserData,
    );

    const getUserInfo = useCallback(async () => {
        try {
            const response = await api.get<UserData>('users/JPLeopoldino')
            if(response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }, [setData])

    return (
        <UserContext.Provider
            value={{
                userData: data,
                getUserInfo
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

const useUser = (): UserContextData => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error(
            'useUser must be used within an UserProvider'
        )
    }

    return context
}

export { useUser, UserProvider }
