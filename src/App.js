import { useState } from 'react';
import RouterProvider from './Router';
import { StaffContext } from './Helper/Context';
import { days } from './Utils/days'

function App() {
  
  const [staff, setStaff] = useState({})
  const [currentDay, setCurrentDay] = useState(1)

  return (
    <StaffContext.Provider value={{ 
      days,
      staff,
      setStaff,
      currentDay,
      setCurrentDay
     }}>
      <RouterProvider />
    </StaffContext.Provider>
  );
}

export default App;
