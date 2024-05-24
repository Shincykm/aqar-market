const Video = ({ src, height="600px" }) => {
  return (
    <div className="flex-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full max-h-[${height}] object-cover pointer-events-none`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
