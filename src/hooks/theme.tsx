import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextData {
    theme: Theme;
    colorScheme: IColorScheme;
    toggleTheme: () => void;
}

interface IColorScheme {
    font: string;
    acent: string;
    background: {
        shade1: string;
        shade2: string;
        shade3: string;
        shade4: string;
        shade5: string;
        shade6: string;
    };
}

export const colorSchemeValues = {
    light: {
        font: '#000',
        acent: '#FFF',
        background: {
            shade1: '#9b91c4',
            shade2: '#a8a0cc',
            shade3: '#bdb4e0',
            shade4: '#c9c2e2',
            shade5: '#dedae9',
            shade6: '#ffffff',
        }
    },
    dark: {
        font: '#FFF',
        acent: '#FFF',
        background: {
            shade1: '#230aad',
            shade2: '#3115b6',
            shade3: '#3d1ebf',
            shade4: '#4826c7',
            shade5: '#532ed0',
            shade6: '#5d36d9',
        }
    }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
    
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        const storadedTheme = localStorage.getItem('theme');

        return (storadedTheme ?? 'dark') as Theme;
    });
    const [colorScheme, setColorScheme] = useState<IColorScheme>(colorSchemeValues.dark)

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }

    const handleColorScheme = useCallback(() => {
        if(currentTheme === 'light'){
            setColorScheme(colorSchemeValues.light)
        } else if(currentTheme === 'dark'){
            setColorScheme(colorSchemeValues.dark)
        }
    }, [currentTheme, setColorScheme])

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
        handleColorScheme()
    }, [currentTheme, handleColorScheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme: currentTheme,
                colorScheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = (): ThemeContextData => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error(
            'useTheme must be used within an ThemeProvider'
        )
    }

    return context
}

export { useTheme, ThemeProvider }
