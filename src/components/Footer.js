import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
        <li>&copy; Weizhen Wang</li>
        <li>
          July 2019
        </li>
      </ul>
    </footer>
  );
}
