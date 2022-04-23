import ReactTooltip from 'react-tooltip'
import './tooltip.scss'
import { useEffect, useRef } from 'react'
const Tooltip = () => {
  let parentTooltip = useRef(null)
  useEffect(() => {
    let tooltip = document.querySelector('.__react_component_tooltip')
    parentTooltip.current.addEventListener('mouseover', () => {
      tooltip.style.display = 'block'
    })
    parentTooltip.current.addEventListener('mouseout', () => {
      tooltip.style.display = 'none'
    })
  }, [])

  return (
    <div className="tool__tip">
      <a data-tip="React-tooltip" ref={parentTooltip}>
        {' '}
        ◕‿‿◕{' '}
      </a>

      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  )
}
export default Tooltip
