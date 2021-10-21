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
    box: string;
    boxHover: string;
    boxActive: string;
    boxBackground: string;
    card: string;
    outline: string,
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
        font: '#ffffff',
        acent: '#FFF',
        box: 'rgba(190, 201, 235, 0.20)',
        boxHover: 'rgba(190, 201, 235, 0.30)',
        boxActive: 'rgba(190, 201, 235, 0.50)',
        boxBackground: 'rgba(56, 47, 95, 0.24)',
        card: 'linear-gradient(90deg, #fdd7fd32, #8b6cc01f)',
        outline: '#c4bee4',
        background: {
            shade1: '#9786dd',
            shade2: '#a093da',
            shade3: '#b8ade4',
            shade4: '#cbc2eb',
            shade5: '#e5e1f1',
            shade6: '#ffffff',
        }
    },
    dark: {
        font: '#FFF',
        acent: '#FFF',
        box: 'rgba(144, 160, 209, 0.11)',
        boxHover: 'rgba(144, 160, 209, 0.2)',
        boxActive: 'rgba(144, 160, 209, 0.5)',
        boxBackground: 'rgba(27, 23, 50, 0.3)',
        card: 'linear-gradient(90deg,rgba(255,0,142,.08),rgba(130,87,229,.08))',
        outline: '#90a0d1',
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
