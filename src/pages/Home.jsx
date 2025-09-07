import Section from "../components/Section.jsx";

export default function Home() {
    return (
        <div>
            {/* HERO */}
            <Section
                fullBleed
                className="bg-white"
                title="Calm Parents Confident Kids"
                subtitle="How to Use Brain Training to Raise Happy Resilient Children"
            >
                <div className="flex flex-col justify-center items-center">
                    {/* Book cover placeholder */}
                    <div className="rounded-xl border bg-gray-50 shadow-sm overflow-hidden max-w-xs md:max-w-sm">
                        <img
                            src="https://calm-parents-confident-kids-bucket.s3.us-east-2.amazonaws.com/backcover.png"
                            alt="Calm Parents Confident Kids book cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>


                    <div className="max-w-xl space-y-4 text-center mt-4">
                        <p>
                            Do you want to be more confident as a parent?
                        </p>
                        <p>
                            Would you like simple tools to raise your child’s — and your own — self-esteem?
                        </p>
                        <p>
                            Learn to Train Your Brain to tell a different story and share this learning together.
                        </p>
                        <a
                            href="#book"
                            className="inline-flex items-center justify-center rounded-md px-5 py-2 border text-sm font-medium hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            BUY THE BOOK
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}
