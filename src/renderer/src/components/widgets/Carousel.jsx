function Carousel(props) {

    return (
        <div className="custom-carousel container">
            <div className="carousel-slides row d-flex flex-nowrap overflow-hidden">
                <div className="col-4 text-center">
                    test1
                </div>
                <div className="col-4 text-center">
                    test2
                </div>
                <div className="col-4 text-center">
                    test3
                </div>
                <div className="col-4 text-center">
                    test1
                </div>
                <div className="col-4 text-center">
                    test2
                </div>
                <div className="col-4 text-center">
                    test3
                </div>
            </div>
            <div className="carousel-controls">
                <div className="button-left">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6 4L6.6 12L14.6 20H10.6L3.3 12.7C2.9 12.3 2.9 11.7 3.3 11.3L10.6 4H14.6Z" fill="currentColor"/>
                    <path opacity="0.3" d="M21.6 4L13.6 12L21.6 20H17.6L10.3 12.7C9.9 12.3 9.9 11.7 10.3 11.3L17.6 4H21.6Z" fill="currentColor"/>
                    </svg>
                    </span>
                </div>
                <div className="button-right">
                    <span class="svg-icon svg-icon-muted svg-icon-2hx"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4L18 12L10 20H14L21.3 12.7C21.7 12.3 21.7 11.7 21.3 11.3L14 4H10Z" fill="currentColor"/>
                    <path opacity="0.3" d="M3 4L11 12L3 20H7L14.3 12.7C14.7 12.3 14.7 11.7 14.3 11.3L7 4H3Z" fill="currentColor"/>
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Carousel