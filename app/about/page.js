import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 1200;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-1  gap-y-12 text-md items-center sm:text-lg sm:grid-cols-5 sm:gap-x-24 sm:gap-y-32">
      <div className="col-span-3">
        <h1 className="text-2xl mb-10 text-accent-400 font-medium sm:text-4xl">
          Welcome to Serenity Suites
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabins.length} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
        />
      </div>

      <div className="relative col-span-2 aspect-square hidden sm:block">
        <Image
          src={image2}
          fill
          placeholder="blur"
          className="object-cover"
          alt="Family that manages Serenity Suites"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, Serenity Suites has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of Serenity
            Suites, blending the timeless beauty of the mountains with the
            personal touch only a family business can offer. Here, you&apos;re
            not just a guest; you&apos;re part of our extended family. So join
            us at Serenity Suites soon, where tradition meets tranquility, and
            every visit is like coming home.
          </p>

          <div className="flex justify-center sm:block">
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
