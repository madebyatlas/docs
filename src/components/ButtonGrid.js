import React from 'react';

function GridButton({ href, children }) {
  return (
    <a className="grid-button" href={href}>
      {children}
    </a>
  );
}

export default function ButtonGrid({ links }) {
  return (
    <div className="button-grid">
      {links.map((link, idx) => (
        <GridButton key={idx} href={link.href}>
          {link.label}
        </GridButton>
      ))}
    </div>
  );
}