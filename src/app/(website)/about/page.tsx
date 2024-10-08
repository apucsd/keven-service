import React from 'react';
import About1 from '/public/assets/about1.png';
import About2 from '/public/assets/about2.png';
import Image from 'next/image';
import Subscribe from '@/src/web-pages/home/Subscribe';

const AboutPage = () => {
    return (
        <>
            <div className="container text-primaryText mx-auto px-4 py-10">
                {/* Our Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {/* Text content */}
                    <div className="lg:order-1 order-2">
                        <h2 className="text-primary text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-sm mb-4">
                            Scelerisque convallis. Sed faucibus dui sit tincidunt eu placerat, eget Ut nisi cursus
                            venenatis tortor leo. Faucibus dui diam sit, ut ac est tincidunt eget consectetur non,
                            tincidunt in efficitur laoreet non felis. Faucibus Praesent id id diam elementum Donec ac
                            venenatis id port a et tincidunt dui sodales. Sed tempor eget Vestibulum Quisque luctus dui
                            lacus sed gravida facilisis adipiscing id sed ut vitae odio gravida in venenatis felis,
                            tempor faucibus amet, Nunc sapien vitae ex convallis.
                        </p>
                        <p className="text-sm mb-4">
                            Tortor, dolor nisi massa amet, idum tincidunt ac eget sed nulla, eu nec malesuada venenatis
                            convallis, quam nisl. Donec in sit quis urna ullamcorper elementum gravida enim sit nisi
                            sollicitudin, hendrerit fringilla lacus dui consectetur venenatis placerat, placerat lacus,
                            at viverra.
                        </p>
                        <p className="text-sm">
                            Tincidunt dui fringilla tortor, ipsum tempor Praesent laoreet lectus tempor id quam ipsum
                            ullamcorper ultricies Nunc convallis.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="lg:order-2 order-1">
                        <Image
                            src={About1}
                            alt="Our Story"
                            className="w-full h-auto object-cover shadow-md"
                            width={533}
                            height={455}
                        />
                    </div>
                </div>

                {/* Our Team Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  mt-10">
                    {/* Image */}
                    <div className="lg:order-1 order-2">
                        <Image
                            src={About2}
                            alt="Our Team"
                            className="w-full h-auto object-cover shadow-md"
                            width={533}
                            height={455}
                        />
                    </div>
                    {/* Text content */}
                    <div className="lg:order-2 order-1">
                        <h2 className="text-primary text-2xl font-semibold mb-4">Our Team</h2>
                        <p className="text-sm mb-4">
                            Scelerisque convallis. Sed faucibus dui sit tincidunt eu placerat, eget Ut nisi cursus
                            venenatis tortor leo. Faucibus dui diam sit, ut ac est tincidunt eget consectetur non,
                            tincidunt in efficitur laoreet non felis. Faucibus Praesent id id diam elementum Donec ac
                            venenatis id port a et tincidunt dui sodales.
                        </p>
                        <p className="text-sm mb-4">
                            Sed tempor eget Vestibulum Quisque luctus dui lacus sed gravida facilisis adipiscing id sed
                            ut vitae odio gravida in venenatis felis, tempor faucibus amet, Nunc sapien vitae ex
                            convallis.
                        </p>
                        <p className="text-sm">
                            Tortor, dolor nisi massa amet, idum tincidunt ac eget sed nulla, eu nec malesuada venenatis
                            convallis, quam nisl. Donec in sit quis urna ullamcorper elementum gravida enim sit nisi
                            sollicitudin, hendrerit fringilla lacus dui consectetur venenatis placerat, placerat lacus,
                            at viverra.
                        </p>
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    );
};

export default AboutPage;
