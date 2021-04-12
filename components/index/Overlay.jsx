// Dependencies
import { useState, useEffect, useRef } from 'react'

// Components
import { BgImage } from 'components/ui'

//
export function OverlayImage({ images }) {
	const [activeImageIndex, setActiveImageIndex] = useState(0)

	//
	useEffect(() => {
		setTimeout(
			() => setActiveImageIndex(images[activeImageIndex + 1] ? activeImageIndex + 1 : 0),
			3000
		)
	}, [activeImageIndex])

	//
	return (
		<figure>
			{images.map((image, i) => (
				<div className="image" key={i} data-active={activeImageIndex === i}>
					<BgImage src={image} />
				</div>
			))}
		</figure>
	)
}

//
export function OverlayContent({ category, title = null, children }) {
	return (
		<article>
			<div className="wrap">
				<span className="category">
					<span>{category}</span> {title && `\u2014 ${title}`}
				</span>
				{children}
			</div>
		</article>
	)
}

//
export function OverlayGallery({ images, active }) {
	const [activeIndex, setActiveIndex] = useState(0)

	//
	const prev = () => {
		if (images[activeIndex - 1]) {
			setActiveIndex(activeIndex - 1)
		} else {
			setActiveIndex(images.length - 1)
		}
	}

	//
	const next = () => {
		if (images[activeIndex + 1]) {
			setActiveIndex(activeIndex + 1)
		} else {
			setActiveIndex(0)
		}
	}

	//
	return (
		<div className="overlay-gallery">
			<div className="top">
				<div className="wrap">
					<span className="caption">{images[activeIndex].caption}</span>

					<div className="pagination">
						<button className="btn__prev" onClick={prev}></button>
						<span className="count">
							{activeIndex + 1} / {images.length}
						</span>
						<button className="btn__next" onClick={next}></button>
					</div>
				</div>
			</div>

			<div className="images">
				{active &&
					images.map(({ file, caption }, i) => (
						<img src={file} key={i} data-active={i === activeIndex} />
					))}
			</div>

			<div className="bottom">
				<p className="description">{images[activeIndex].blurb}</p>
			</div>
		</div>
	)
}

//
export function Overlay({ active, fnClose, children }) {
	const [showContent, setShowContent] = useState(false)
	const [isReady, setIsReady] = useState(false)

	//
	const closeOverlay = () => {
		setShowContent(false)
		setIsReady(false)
		setTimeout(fnClose, 500)
	}

	//
	useEffect(() => {
		if (active) {
			setShowContent(true)
			setTimeout(() => setIsReady(true), 500)
		}
	}, [active])

	//
	return (
		<section
			className="overlay__index"
			data-active={active}
			data-show-content={showContent}
			data-ready={isReady}
		>
			<button className="btn__close" onClick={closeOverlay}>
				<i className="material-icons">close</i>
			</button>

			{children}
		</section>
	)
}
