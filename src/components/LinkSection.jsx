export default function LinkSection({ section }) {
  const { id, href, intro, title, detail, image } = section
  const titleId = `${id}-titulo`
  const [width, height] = image

  return (
    <section className={`band band--${id}`}>
      <a className="band__link" href={href} target="_blank" rel="noopener" aria-labelledby={titleId}>
        <div className="band__art">
          <img src={`/images/${id}.webp`} alt="" width={width} height={height} loading="lazy" decoding="async" />
        </div>
        <div className="band__copy">
          <h2 id={titleId}>
            <span>{intro}</span>
            <strong>{title}</strong>
          </h2>
          <p>{detail.map((line) => <span key={line}>{line}</span>)}</p>
        </div>
      </a>
    </section>
  )
}
