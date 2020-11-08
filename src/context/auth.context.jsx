import React from "react";
const AuthContext = React.createContext()


export function AuthProvider({ children  }) {
  const [ currentUser, setCurrentUser] = React.useState() 

  const login = () => {
    
  }

  

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext()
  return context
}