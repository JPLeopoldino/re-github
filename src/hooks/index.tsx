import React from 'react';

import { ThemeProvider } from './theme';
import { UserProvider } from './user';
import { SearchProvider } from './search';

const AppProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <UserProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </UserProvider>
        </ThemeProvider>
    )
}

export default AppProvider;
