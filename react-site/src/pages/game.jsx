import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import GameDesktop from './GameDesktop';
import GameMobile from './mobile/GameMobile.jsx'
/***
 * Game page has unique page representations for desktop vs mobile pages. Robots is like a hub which checks
 * whether the website is on mobile or not, then renders the correct page.
 */
export default function Game() {
  const isMobile = useContext(MobileContext);
  return (
    <div>
      {isMobile ? <GameMobile /> : <GameDesktop />}
    </div>
  )

}