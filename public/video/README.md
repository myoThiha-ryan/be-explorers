# Hero background video

There is no video in the hero at the moment — it is the photograph alone.
Drop a file here and list it below to switch it on.

## Adding one

Drop the files here and list them in `hero.videoSources` in
`src/content/home.ts`, best-supported format first:

```ts
videoSources: [
  { src: "/video/hero.mp4", type: "video/mp4" },
  { src: "/video/hero.webm", type: "video/webm" },
],
```

Leave the array empty and the hero uses `hero.image` alone — which is also what
happens if the file is missing, the browser blocks autoplay, or the visitor has
"reduce motion" switched on. The photograph is always underneath.

## What to supply

| | |
| --- | --- |
| Length | 8–15 seconds, cut so the last frame matches the first (it loops) |
| Resolution | 1920×1080 is plenty; the hero is cropped, not letterboxed |
| File size | **Aim for under 3 MB.** This loads on every visit to the homepage, often on mobile data |
| Audio | None. It is muted and browsers will not autoplay video with sound |
| Format | H.264 MP4 for everything; add a WebM/VP9 if you want smaller files in Chrome and Firefox |
| Content | Slow, steady movement. Avoid fast cuts, on-screen text and anything where a face is the subject — the headline sits over the lower left |

Compress with [HandBrake](https://handbrake.fr) (free): "Web Optimised", RF 28–30,
and drop the audio track. A 10-second 1080p clip should land around 2 MB.
