import Image from "next/image";
import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Container asSection className="border-x-0">
        {/* Header */}
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          About
        </h2>

        {/* Main Content - Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
          {/* Left Column - About Me */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-8">
                A little bit about myself.
              </h1>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  I&apos;m a frontend engineer who believes great products come
                  from understanding both the technical and human sides of
                  software development.
                </p>
                <p>
                  I&apos;m constantly learning new things everyday and I love
                  meeting people who are motivated and unafraid of sharing their
                  ideas with the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Large Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/ashish.webp"
              alt="Ashish Patel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
      <Container asSection>
        {/* Journey Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
              The Journey
            </h2>
            <h1 className="text-3xl font-bold mb-8">
              Building products at scale.
            </h1>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                My journey started with a Computer Science degree, but I quickly
                realized the most interesting problems were about creating
                experiences that people actually want to use.
              </p>
              <p>
                I love the intersection of design and code—building products
                that are both beautiful and performant. Over the past 5+ years,
                I&apos;ve specialized in React ecosystems and scaling frontend
                architectures for millions of users.
              </p>
            </div>
          </div>

          {/* Journey Illustration */}

          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/pathway.webp"
              alt="Journey Pathway"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
