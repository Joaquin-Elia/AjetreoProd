import { useContext, useEffect, useRef} from "react"
import { CursorContext } from "../../context/CursorContext"


export const MouseEffect = () => {
    const {cursorType} = useContext(CursorContext)
    const mainCursorRef = useRef(null)

    useEffect(() => {
      document.addEventListener('mousemove', e => {
        const {clientX, clientY} = e;

        const mouseX = clientX - mainCursorRef.current.clientWidth / 2;
        const mouseY = clientY - mainCursorRef.current.clientHeight / 2;
        mainCursorRef.current.style.transform = `translate3d(
          ${mouseX}px, ${mouseY}px, 0)
        `;
        mainCursorRef.current.style.display = 'block';
      })
    })

  return (
    <>
      <div 
        ref={mainCursorRef}
        className={`main-cursor ${cursorType}`}
      />
    </>
  )
}
