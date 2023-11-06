import './Popup.css'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import OutsideClickHandler from 'react-outside-click-handler';

function Popup({ isPopupOpen, closePopup }) {
  const navigate = useNavigate();
  const OverlayElement = document.getElementById("overlay");

  const handleLogOut = () => {
    localStorage.removeItem('photo');
    localStorage.removeItem('name');
    navigate('/');
  }

  return ReactDOM.createPortal(<div className={isPopupOpen ? "popup_overlay visible" : "popup_overlay"}>
    <OutsideClickHandler onOutsideClick={closePopup}>
      <div className='popup'>
        <button type='button' onClick={handleLogOut} >Log out</button>
        <div className='close_icon' onClick={closePopup}>
          <span></span>
          <span></span>
        </div>
      </div>
    </OutsideClickHandler>
  </div>, OverlayElement)
}

export default Popup;