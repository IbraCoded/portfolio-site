import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24 px-4">
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-primary">Ibrahim Adeshina</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A software engineer passionate about building scalable, efficient,
            and user-friendly applications. I specialize in full-stack
            development, automation, and data-driven solutions, leveraging
            technologies like Python, Django, React, and Next.js. With
            experience in software automation at Huawei and a strong background
            in backend and API development, I create systems that enhance
            efficiency and drive innovation. Let’s build something amazing
            together!
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white glow-effect"
            >
              Get in touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 gradient-border rounded-full">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/profile image1.jpg"
              alt="John Doe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
