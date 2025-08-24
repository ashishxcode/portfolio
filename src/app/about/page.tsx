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
                  I&apos;m a frontend developer who loves creating clean, minimal
                  designs that solve real user problems. I believe great products
                  come from understanding both the technical and human sides of
                  software development.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  cafes as a coffee enthusiast, trying different cuisines as a
                  foodie, or taking long walks to clear my mind and find
                  inspiration.
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
              Building scalable web experiences.
            </h1>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                My journey started with learning web development, and I quickly
                realized the most interesting problems were about creating
                clean, minimal experiences that people actually want to use.
              </p>
              <p>
                After spending 3+ years building web applications, I now focus
                on creating scalable solutions. I love the intersection of
                design and code—building products that are both beautiful and
                functional while maintaining clean architecture.
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
