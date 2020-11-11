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
        // if useEffect's argument returns a function f
        // then f is used as 'cleanup' https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
        return function () {
            refCopy.current.removeEventListener('mouseenter', enter);
            refCopy.current.removeEventListener('mouseleave', leave);
        };
    })
    return [ref, hovered];
}

export default useHover;