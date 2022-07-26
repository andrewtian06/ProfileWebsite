import React from 'react';
import type { Status } from './Message';

export default function HandleStatus({ result }: { result?: Status }) {
  return (
    <>
      {result && (
        <span
          className="text-right text-sm"
          style={{
            color:
              result.type === 'success'
                ? 'rgb(97, 217, 124)'
                : result.type === 'warning'
                ? 'rgb(255, 199, 30)'
                : result.type === 'error'
                ? 'rgb(223, 70, 85)'
                : '',
          }}
        >
          {result.text.text}
        </span>
      )}
    </>
  );
}
