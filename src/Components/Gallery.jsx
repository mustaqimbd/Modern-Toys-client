import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Gallery = () => {
    const items = [
        { image: 'https://t3.ftcdn.net/jpg/02/45/06/78/240_F_245067800_jb3Yyp25WJ5C8SimLVzAe0PwgqOjWOC6.jpg' },
        { image: 'https://t4.ftcdn.net/jpg/05/20/39/59/240_F_520395917_UClnrJCWA4zkwCHk7VrhpihFVP79tEOB.jpg' },
        { image: 'https://t4.ftcdn.net/jpg/05/20/39/59/240_F_520395917_UClnrJCWA4zkwCHk7VrhpihFVP79tEOB.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg' },
        { image: 'https://t4.ftcdn.net/jpg/05/66/15/05/240_F_566150513_YFCRHQ26vcd6XBM4Fw4BXcS2qWNMm7YZ.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/03/73/15/66/240_F_373156695_l3KIprQ85A83WbiGMKNNkVbT6CLfDN0p.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/05/30/56/34/240_F_530563406_9qc8jfZ0EFBYa5vQowZW075c69kRTc1x.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/01/82/93/18/240_F_182931803_8XiyhDtE5pyBumw8YUsMrHyuLyCevhZt.jpg' },
        { image: 'https://t3.ftcdn.net/jpg/01/82/93/18/240_F_182931803_8XiyhDtE5pyBumw8YUsMrHyuLyCevhZt.jpg' },
        { image: 'https://t4.ftcdn.net/jpg/01/04/09/39/240_F_104093908_4PHISSnIopdvDnc5J2NnYGM4UkTkUJtO.jpg' },
        { image: 'https://as.ftcdn.net/v1/pics/placeholders/spacer.gif' }
    ]

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10 mb-6'>Modern Toys Gallery</h1>

            <Carousel animation='slide' navButtonsAlwaysVisible duration={1000}>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        items.slice(0, 4).map((item, i) => <Item key={i} item={item} />)
                    }
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        items.slice(4, 8).map((item, i) => <Item key={i} item={item} />)
                    }
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        items.slice(8, 12).map((item, i) => <Item key={i} item={item} />)
                    }
                </div>
            </Carousel>
        </div>
    );
};
const Item = ({ item }) => {
    return (
        < Paper >
            <div>
                <img src={item.image} alt="" className='rounded' />
            </div>
        </Paper >
    )
}
export default Gallery;