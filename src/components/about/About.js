const About = () => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 pb-3 lg:max-w-7xl sm:grid-cols-2">
            <img
                src="https://res.cloudinary.com/dgxomkis0/image/upload/v1693512882/about/shane_butler_headshot_xqukt1.jpg"
                alt="Shane Butler Headshot Portrait"
            />
            <div>
                <h2 className="font-bold text-gray-900">About Shane</h2>
                <p className="mt-4 text-gray-500">
                    Shane Butler is an award winning digital photographer specializing in architectural and interiors
                    photography. Currently serving Raleigh, Durham and Chapel Hill in North Carolina, the Eastern
                    Panhandle of West Virginia, and the wider Washington DC metropolitan area.
                </p>
                <p className="mt-4 text-gray-500">
                    Shane grew up in Beacon, New York raised by each an architect and graphic designer.
                    Influenced by a sea of architectural drawings and QuarkXPress layouts, Shane's attraction to the
                    formal aspects of composition and design was natural. Shane studied photography at Old Dominion
                    University in Norfolk, Virginia and graduated in 2009. Shane has worked as a freelance photographer
                    in the Washington DC and Richmond metropolitan areas, and currently splits his time between North
                    Carolina and West Virginia.
                </p>
                <p className="mt-4 text-gray-500">
                    Shane is the recipient of a Virginia Museum of Fine Arts Fellowship Award and was included in the
                    2009 PDN Photo Annual. His personal work has been shown at Virginia Museum of Contemporary Art.
                    Other interests include film, cooking and birding. To discuss capturing your next project or for any
                    additional information:
                </p>
                <h2 className="font-bold mt-4 text-gray-900">Contact Shane</h2>
                <p className="mt-4 text-gray-500">
                    <a className='hover:text-gray-600' href="mailto:shanedbutler@gmail.com" target="_blank" rel="noreferrer">
                        shanedbutler@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}

export default About;
