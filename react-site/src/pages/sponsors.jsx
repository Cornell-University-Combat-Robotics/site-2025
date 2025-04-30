import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import SponsorsDesktop from './sponsorsDesktop.jsx';
import SponsorsMobile from './mobile/SponsorsMobile.jsx'
/***
 * Sponsors page has unique page representations for desktop vs mobile pages. Sponsors is like a hub which checks
 * whether the website is on mobile or not, then renders the correct page.
 */
export default function Sponsors() {
  const isMobile = useContext(MobileContext);
  return (
    <div>
      {isMobile ? <SponsorsMobile /> : <SponsorsDesktop />}
    </div>
  )

}