const images = [
    'https://t3.ftcdn.net/jpg/02/45/06/78/240_F_245067800_jb3Yyp25WJ5C8SimLVzAe0PwgqOjWOC6.jpg',
    'https://t4.ftcdn.net/jpg/05/20/39/59/240_F_520395917_UClnrJCWA4zkwCHk7VrhpihFVP79tEOB.jpg',
    'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg',
    'https://t4.ftcdn.net/jpg/05/66/15/05/240_F_566150513_YFCRHQ26vcd6XBM4Fw4BXcS2qWNMm7YZ.jpg',
    'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg',
    'https://t3.ftcdn.net/jpg/05/30/56/34/240_F_530563406_9qc8jfZ0EFBYa5vQowZW075c69kRTc1x.jpg',
    'https://t3.ftcdn.net/jpg/01/82/93/18/240_F_182931803_8XiyhDtE5pyBumw8YUsMrHyuLyCevhZt.jpg',
    'https://t4.ftcdn.net/jpg/01/04/09/39/240_F_104093908_4PHISSnIopdvDnc5J2NnYGM4UkTkUJtO.jpg',
    'https://as.ftcdn.net/v1/pics/placeholders/spacer.gif'
]

const Gallery = () => {
    return (
        <div>
            <h1 className='text-3xl'>My Gallery</h1>
            
            <div className="grid grid-cols-4 gap-4">
                {
                    images.map((image, index) => {
                        return (
                            <img src={image} key={index} alt="Image" />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;