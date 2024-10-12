import HelloWorld from './react/components/hello-world';
import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('reactMount');
const root = createRoot(container);
root.render(<HelloWorld />);
