import React from 'react';

const methodStyles = {
  GET: {
    backgroundColor: '#61affe',
    color: 'white',
  },
  POST: {
    backgroundColor: '#49cc90',
    color: 'white',
  },
  PUT: {
    backgroundColor: '#fca130',
    color: 'white',
  },
  DELETE: {
    backgroundColor: '#f93e3e',
    color: 'white',
  },
};

export default function ApiEndpoint({method, path}) {
  const style = methodStyles[method.toUpperCase()] || { backgroundColor: 'grey', color: 'white' };

  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '5px',
        overflow: 'hidden',
        fontFamily: 'monospace',
        fontSize: '16px',
      }}
    >
      <span
        style={{
          ...style,
          padding: '4px 8px',
          fontWeight: 'bold',
        }}
      >
        {method.toUpperCase()}
      </span>
      <span style={{ padding: '4px 8px', color: 'var(--ifm-color-content)' }}>
        {path}
      </span>
    </div>
  );
}