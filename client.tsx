import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@layouts/App'
import { BrowserRouter } from 'react-router-dom';

const rootNode = document.getElementById('app') as Element;

const app = ReactDOM.createRoot(rootNode);

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); // React 18 Ver Code


// directory
//// pages - 서비스 페이지
//// components - 짜잘한 컴포넌트
//// layouts - 공통 레이아웃