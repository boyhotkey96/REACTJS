import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./files/video-1.mp4";

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play1() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));

    return (
        <video ref={videoRef} src={video1} width="100%" />
    );
}

export default forwardRef(Video);
