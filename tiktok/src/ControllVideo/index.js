import Video from "./Video";
import { useRef } from "react";

function ControllVideo() {
    const videoRef = useRef();
    const playRef = useRef();
    const pauseRef = useRef();

    // Handle when click button Play
    const handlePlay = () => {
        // console.log(videoRef.current)
        videoRef.current.play1();
        hidePlay();
    };

    // Handle when click button Pause
    const handlePause = () => {
        videoRef.current.pause();
        showPlay();
    };

    // Hide Play & Show Pause
    const hidePlay = () => {
        playRef.current.style.display = "none";
        pauseRef.current.style.display = "block";
    };


    // Show Play & Hide Pause
    const showPlay = () => {
        playRef.current.style.display = "block";
        pauseRef.current.style.display = "none";
    };

    return (
        <div style={{ position: "relative", width: "350px" }}>
            <Video ref={videoRef} />
            <div
                style={{
                    position: "absolute",
                    content: "",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <button ref={playRef} onClick={handlePlay}>
                    Play
                </button>
                <button
                    style={{ display: "none" }}
                    ref={pauseRef}
                    onClick={handlePause}
                >
                    Pause
                </button>
            </div>
        </div>
    );
}

export default ControllVideo;
