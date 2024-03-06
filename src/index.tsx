import { createRoot } from 'react-dom/client';
import { App } from './views/App'

const root = createRoot(document.querySelector("#root") as Element);

root.render(<App></App>);