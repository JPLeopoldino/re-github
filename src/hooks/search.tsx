import React, {
    createContext,
    useContext,
    useState,
    useCallback,
} from 'react';
import api from '../services/api';

interface SearchContextData {
    searchUser(value: string): void;
    userResultData: ItemsData[];
}

interface UserData {
    // total_count: number,
    // incomplete_results: boolean,
    items: ItemsData[],
    // login: string,
}

interface ItemsData {
    login: string,
}

const dataInitialState = {
    login: '',
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider: React.FC = ({ children }) => {

    const [userResultData, setUserResultData] = useState<ItemsData[]>([
        dataInitialState as ItemsData,
    ]);
    
    // const [loading, setLoading] = useState(false);

    const searchUser = useCallback(async (value: string) => {
        await setTimeout(async () => {
            try {
                const response = await api.get<UserData>(`search/users?q=${value}&per_page=5`)
                if(response.data) {
                    const adapter: ItemsData[] = response.data.items.map((i) => {
                        return(
                            {
                                login: i.login,
                            }
                        )
                    })
                    setUserResultData(adapter);
                }
            } catch (error) {
                console.log(error)
            }
        }, 3250);
    }, [setUserResultData])


    return (
        <SearchContext.Provider
            value={{
                userResultData: userResultData,
                searchUser
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

const useSearch = (): SearchContextData => {
    const context = useContext(SearchContext)

    if (!context) {
        throw new Error(
            'useSearch must be used within an SearchProvider'
        )
    }

    return context
}

export { useSearch, SearchProvider }
