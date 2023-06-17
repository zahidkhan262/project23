const BtnStyle = {
    backgroundColor: '#001b36',
    zIndex: '99999',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
}
const PrevArrow = ({ className, style, onClick }) => (
    <button style={{ ...style, left: '10px' }} style={BtnStyle} onClick={onClick} className={`${className} prevSlide`}>
        <div>back</div>
    </button>
);
const NextArrow = ({ className, style, onClick }) => (
    <button style={{ ...style, right: '10px' }} style={BtnStyle} onClick={onClick} className={`${className} nextSlide`}>
        <div>back</div>
    </button>
);

export var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};