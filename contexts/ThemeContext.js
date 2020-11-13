import React, { createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends React.Component {
    state = {
        theme: 'dark'
    }

    setTheme = (theme) => {
        this.setState({
            theme: theme
        });
    }

    componentDidMount() {
        const localTheme = localStorage.getItem("theme");
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localTheme
          ? this.setTheme("dark")
          : localTheme
          ? this.setTheme(localTheme)
          : this.setTheme("light"); 
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, setTheme: this.setTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}