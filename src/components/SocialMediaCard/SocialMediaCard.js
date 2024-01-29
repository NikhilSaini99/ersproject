import { Card, CardContent } from '@mui/material';

import { BlackButton } from '@/styles/globalStyle';
import Link from 'next/link';

function SocialMediaCard() {
    return (
        <section data-aos="fade-up-left">
        <Card>
            <CardContent className='md:px-12 px-28 py-16'>
            <h1 className="text-3xl font-medium text-mainColor">Facebook</h1>
              <div className=" border w-[70px] border-yellowish mt-1"></div>
                <div className="flex flex-col justify-between gap-3 my-3">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100094062796048&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="340"
                        height="500"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media">
                    </iframe>
                    <Link
                        href="https://www.facebook.com/EswatiniRevenueService"
                        target="_blank"
                    >
                        <BlackButton>Follow Us</BlackButton>
                    </Link>
                </div>
            </CardContent>
        </Card>
        </section>
    );
}

export default SocialMediaCard;