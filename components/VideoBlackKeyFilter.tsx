export default function VideoBlackKeyFilter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <filter id="video-black-key" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  2.2 2.2 2.2 0 -0.12"
        />
      </filter>
      <filter id="video-teal-grade" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.08 0.18 0.62 0.94" />
          <feFuncG type="table" tableValues="0 0.34 0.68 0.91 1" />
          <feFuncB type="table" tableValues="0 0.31 0.58 0.83 0.97" />
        </feComponentTransfer>
      </filter>
      <filter id="luma-teal-on-light" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1.8 0 0 0 -0.04"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.04 0.05 0.12 0.45" />
          <feFuncG type="table" tableValues="0.22 0.4 0.63 0.85" />
          <feFuncB type="table" tableValues="0.22 0.36 0.53 0.78" />
        </feComponentTransfer>
      </filter>
      <filter id="icon-teal-on-light" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="1 0.3 0.08 0.05" />
          <feFuncG type="table" tableValues="1 0.74 0.55 0.45" />
          <feFuncB type="table" tableValues="1 0.66 0.47 0.39" />
        </feComponentTransfer>
      </filter>
      <filter id="video-ink-green-multiply" colorInterpolationFilters="sRGB">
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="1 0.55 0.17 0.09" />
          <feFuncG type="table" tableValues="1 0.88 0.72 0.63" />
          <feFuncB type="table" tableValues="1 0.83 0.6 0.52" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}
