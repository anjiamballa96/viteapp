import React, { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(true);
  const changeTheme = (e) => {
    setTheme(e);
  };

  return [theme, changeTheme];
}

export default useTheme;
