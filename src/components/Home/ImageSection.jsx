import samsung from  '../../assets/samsung.png'
import iphone from  '../../assets/iphone.jpg'
const ImageSection = () => {
    return (
        <div className='max-w-7xl mx-auto w-full lg:mt-[100px] mb-20'>
            <div className="flex flex-col lg:flex-row gap-2 p-3">
                <img className='lg:w-[50%] mx-auto lg:h-[400px] rounded cursor-pointer' src={samsung} alt="" />
                <img className='lg:w-[50%] lg:h-[400px] rounded cursor-pointer' src={iphone} alt="" />
            </div>
        </div>
    );
};

export default ImageSection;