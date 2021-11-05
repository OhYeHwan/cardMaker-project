import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();

// 확장 가능한 컴포넌트
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

// 컴포넌트 props인 경우 대문자로 시작
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
