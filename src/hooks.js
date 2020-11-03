import { useEffect, useRef, useState } from 'react';

function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const refCopy = ref;
        refCopy.current.addEventListener('mouseenter', function () { });
        refCopy.current.addEventListener('mouseleave', function () { });
        return function () { };
    })
    return [ref, hovered];
}

export default useHover;