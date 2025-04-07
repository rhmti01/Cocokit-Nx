import { ThemeConfigContext } from '@cocokits/react-components';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { Button, Checkbox } from '@cocokits/react-components';
import './app.module.scss';

function App() {
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
      <div>
        <h1>Cocokits React App</h1>
        <Button>Hello</Button>
        <Checkbox>This is a checkbox</Checkbox>
      </div>
    </ThemeConfigContext.Provider>
  );
}

export default App;
