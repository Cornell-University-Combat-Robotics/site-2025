import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import RobotDesktop from './RobotDesktop';
import RobotMobile from './mobile/RobotMobile.jsx';

/***
 * Robots page has unique page representations for desktop vs mobile pages. Robots is like a hub which checks
 * whether the website is on mobile or not, then renders the correct page.
 */
export default function Robots() {
  const isMobile = useContext(MobileContext);
  return (
    <div>
      {isMobile ? <RobotMobile /> : <RobotDesktop />}
    </div>
  )

}