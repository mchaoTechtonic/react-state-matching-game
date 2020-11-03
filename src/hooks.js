import { useEffect, useRef, useState } from 'react';

function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    useEffect(() => { return () => { } })
    return [ref, hovered];
}

export default useHover;