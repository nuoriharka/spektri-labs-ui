import { logos } from '@/data/logos'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16 section-halo">
            <div className="group relative m-auto max-w-6xl px-4 md:max-w-7xl md:px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Powering the best teams</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            reducedSpeed={0}
                            gap={112}>
                            {logos.map(({ src, alt }) => (
                                <div className="flex" key={src}>
                                    <Image
                                        className="mx-auto h-5 w-auto dark:invert"
                                        src={src}
                                        alt={alt}
                                        width={140}
                                        height={20}
                                        sizes="(min-width: 1024px) 140px, 120px"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
