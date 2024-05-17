const Video = ({ src, height="600px" }) => {
  return (
    <div className={`w-full h-[${height}]`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover pointer-events-none`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
