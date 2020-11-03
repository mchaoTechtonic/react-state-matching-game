import { useEffect, useRef, useState } from 'react';

function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    function enter() {
        setHovered(true);
    }
    function leave() {
        setHovered(false);
    }
    useEffect(() => {
        const refCopy = ref;
        refCopy.current.addEventListener('mouseenter', enter);
        refCopy.current.addEventListener('mouseleave', leave);
        return function () { };
    })
    return [ref, hovered];
}

export default useHover;