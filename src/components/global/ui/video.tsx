export function Video({
  path,
  width = '320',
  height = '240',
  className,
  controls,
  autoPlay = true,
  loop = true,
}: {
  path: string;
  width?: string;
  height?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}) {
  if (!path) return null;
  return (
    <video
      width={width}
      height={height}
      controls={controls}
      playsInline={true}
      loop={loop}
      autoPlay={autoPlay}
      muted
      preload="none"
      className={className}
    >
      <source src={path} type="video/mp4" />
      {/*<track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />*/}
      Your browser does not support the video tag.
    </video>
  );
}
