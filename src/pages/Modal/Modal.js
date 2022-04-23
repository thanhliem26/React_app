import ReactDOM from 'react-dom'
import { useRef, useEffect, useState } from 'react'
import classNameBounding from '../../utils/classBounding'
import conMeoNguNgoc from './Ami.jpg'

const Modal = (props) => {
  let { bounding, children, position } = props
  let widthContent = useRef(null)
  const [style, setStyle] = useState(null)

  useEffect(() => {
    let boundItem = widthContent.current.getBoundingClientRect()
    setStyle(classNameBounding(position, bounding, boundItem))
  }, [position, bounding])

  return ReactDOM.createPortal(
    <div id="modal-wrapper" style={style} ref={widthContent}>
      <h4>{children}</h4>
      <img src={conMeoNguNgoc} alt="con Mèo Ngu Ngốc" />
    </div>,
    document.querySelector('#portal'),
  )
}

export default Modal
