import { useState, useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  isPlaying: boolean;
};


function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => { // The useEffect will call play() or pause() depending on the value of isPlaying
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline className="mx-20 w-160 rounded-lg shadow-md"/>;
}

export default function AppVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)} className='mx-20 mt-20 mb-2 px-4 py-2 rounded text-white bg-blue-500'>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}