import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Background({ plaStatus, heroCount }) {
    if (plaStatus) {
        return (
            <video className='background' autoPlay muted loop >
                <source src={video1} type='video/mp4' />
            </video>
        )
    } else if (heroCount === 0) {
        return (
            <img src={i} alt="" />
        )
    }
}

export default Background;