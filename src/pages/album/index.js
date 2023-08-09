import Image from "next/image";
import NextImage from "../../assets/nextjs.webp";

const Album = () => {
    return (
        <div>
            <h1>Image Tag</h1>
            <img src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="random" />
            <h1>Image Tag</h1>
            <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="random" width={200} height={200}
                layout="responsive"
            />
            <h1>Image Tag with Local Image</h1>
            <Image src={NextImage} alt="random" width={200} height={200}
                layout="responsive"
            />
        </div>
    );
};

export default Album;