// Child component usage:
import { useContext } from 'react';
import { MobileContext } from '../App.jsx';
import RobotDesktop from './RobotDesktop';
import RobotMobile from './mobile/RobotMobile.jsx';


export default function Robots() {
  <RobotDesktop />
  const isMobile = useContext(MobileContext);
  return (
    <div>
      {isMobile ? <RobotMobile /> : <RobotDesktop />}
    </div>
  )

}