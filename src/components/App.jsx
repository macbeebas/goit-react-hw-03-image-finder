import css from './App.module.css';

import { FallingLines } from 'react-loader-spinner';

export const App = () => {
  return (
    <>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: '2em',
          // color: '#010101',
          border: '1px solid red',
        }}
      >
        React homework template
      </div>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: '2em',
          // color: '#010101',
          border: '1px solid green',
        }}
      >
        <h1>Test2</h1>
      </div>
      <p
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: '2em',
          // color: '#010101',
          border: '1px solid blue',
          position: 'sticky',
          zIndex: 5000,
        }}
      >
        <FallingLines
          // color="#4fa94d"
          color="black"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </p>
    </>
  );
};
