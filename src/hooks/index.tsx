import React from 'react';

import { UserProvider } from './user';
import { SearchProvider } from './search';

const AppProvider: React.FC = ({ children }) => {
    return (
        <UserProvider>
            <SearchProvider>
                {children}
            </SearchProvider>
        </UserProvider>
    )
}

export default AppProvider;
