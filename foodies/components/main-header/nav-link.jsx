'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.modules.css';

// export default function NavLink({href, children}) {
export default function NavLink({href, children}) {
  const path = usePathname();
  console.log('NavLink() href, path: ', href, path);
  console.log("classes: ", classes.active, classes.link)
  console.log('NavLink() template string literal: ', `${classes.link} ${classes.active}`);

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
