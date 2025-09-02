import { InfiniteSlider } from '@/components/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
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
                            <div className="flex">
                                <a href="https://openai.com" target="_blank" rel="noreferrer noopener" aria-label="OpenAI">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/openai.svg"
                                        alt="OpenAI Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>

                            <div className="flex">
                                <a href="https://microsoft.com" target="_blank" rel="noreferrer noopener" aria-label="Microsoft">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/microsoft.svg"
                                        alt="Microsoft Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://google.com" target="_blank" rel="noreferrer noopener" aria-label="Google">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/logos/google.svg"
                                        alt="Google Logo"
                                        height="16"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://github.com" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/logos/github.svg"
                                        alt="GitHub Logo"
                                        height="16"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://vercel.com" target="_blank" rel="noreferrer noopener" aria-label="Vercel">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/vercel.svg"
                                        alt="Vercel Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://stripe.com" target="_blank" rel="noreferrer noopener" aria-label="Stripe">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/logos/stripe.svg"
                                        alt="Stripe Logo"
                                        height="16"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://figma.com" target="_blank" rel="noreferrer noopener" aria-label="Figma">
                                    <img
                                        className="mx-auto h-4 w-fit dark:invert"
                                        src="/logos/figma.svg"
                                        alt="Figma Logo"
                                        height="16"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://anthropic.com" target="_blank" rel="noreferrer noopener" aria-label="Anthropic">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/anthropic.svg"
                                        alt="Anthropic Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>

                            <div className="flex">
                                <a href="https://meta.com" target="_blank" rel="noreferrer noopener" aria-label="Meta">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/meta.svg"
                                        alt="Meta Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>

                            <div className="flex">
                                <a href="https://lovable.dev" target="_blank" rel="noreferrer noopener" aria-label="Lovable">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/lovable.svg"
                                        alt="Lovable Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>

                            <div className="flex">
                                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/tailwindcss.svg"
                                        alt="Tailwind CSS Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <a href="https://zapier.com" target="_blank" rel="noreferrer noopener" aria-label="Zapier">
                                    <img
                                        className="mx-auto h-5 w-fit dark:invert"
                                        src="/logos/zapier.svg"
                                        alt="Zapier Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </a>
                            </div>
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
